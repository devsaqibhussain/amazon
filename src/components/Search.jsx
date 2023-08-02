import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import { callAPI } from "../utils/CallApi";
import { useNavigate, createSearchParams } from 'react-router-dom'

const Search = () => {
  const [suggestions, setSuggestions] = useState(null);
  const [searchTerm, SetSearchTerm] = useState("");
  const [category, setCategory] = useState("All");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate({
      pathname: 'search',
      search: `${
        createSearchParams({
          category: `${category}`,
          searchTerm: `${searchTerm}`
        })
      }`
    });
    SetSearchTerm("")
    setCategory("All")
  };
  const handleKeyDown = (event) => {
    if(event.key === 'Enter'){
      handleSubmit(event);
    }else{
      return
    }
  }

  const getSuggestions = () => {
    callAPI("data/suggestions.json").then((suggestionsResuts) => {
      setSuggestions(suggestionsResuts);
    });
  };

  useEffect(() => {
    getSuggestions();
  }, []);
  return (
    <div className="w-[100%]">
      <div className="h-10 flex">
        <select
          className="bg-gray-300 text-black rounded-l text-xs xl:text-sm text-center w-auto"
          onChange={(e) => {
            setCategory(e.target.value);
          }}
          value={category}
        >
          <option value="All">All</option>
          <option value="Deals">Deals</option>
          <option value="Amazon">Amazon</option>
          <option value="Fashion">Fashion</option>
          <option value="Computer">Computers</option>
          <option value="Home">Home</option>
          <option value="Mobile">Mobile</option>
        </select>
        <div className="grow z-50">
          <input
            type="text"
            className="flex w-full h-[40px] outline-none text-black p-4"
            value={searchTerm}
            onKeyDown={handleKeyDown}
            onChange={(e) => {
              SetSearchTerm(e.target.value);
            }}
          />
          {suggestions && (
            <div className="bg-white text-black border-gray-600 border z-50 pl-4 pr-4">
              {suggestions
                .filter((suggestion) => {
                  const currentSearchTerm = searchTerm.toLowerCase();
                  const title = suggestion.title.toLowerCase();
                  return (
                    currentSearchTerm &&
                    title.startsWith(currentSearchTerm) &&
                    title !== currentSearchTerm
                  );
                })
                .slice(0, 10)
                .map((suggestion) => {
                  return(
                  <div
                    key={suggestion.id}
                    className="p-1 cursor-pointer"
                    onClick={() => {
                      SetSearchTerm(suggestion.title);
                    }}
                  >
                    {suggestion.title}
                  </div>
                )})}
            </div>
          )}
        </div>

        <button
          className="w-[45px] bg-orange-300 rounded-r"
          onClick={handleSubmit}
        >
          <MagnifyingGlassIcon className="h-[25px] m-auto stroke-slate-950" />
        </button>
      </div>
    </div>
  );
};

export default Search;
