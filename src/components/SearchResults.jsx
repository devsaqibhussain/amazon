import { useSearchParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { callAPI } from "../utils/CallApi";
import { ProductDetails } from "./";
import { BASE_URL, Currency } from "../utils/constants";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [products, setProducts] = useState(null);

  const getSearchResults = () => {
    const searchTerm = searchParams.get("searchTerm");
    const category = searchParams.get("category");

    callAPI("data/search.json").then((results) => {
      const categoryResults = results[category];
      if (searchTerm) {
        const searchResults = categoryResults.filter((product) =>
          product.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setProducts(searchResults);
      } else {
        setProducts(categoryResults);
      }
    });
  };

  useEffect(() => {
    getSearchResults();
  }, [searchParams]);

  return (
    <div className=" min-w-[1200px] max-w-[95%] mt-5 m-auto">
      {products &&
        products.map((product, key) => {
          return (
            <Link key={key} to={`../product/${product.id}`}>
              <div className=" h-[250px] grid grid-cols-12 rounded mt-1 mb-1 border border-gray-100">
                <div className="col-span-2 flex items-center justify-center bg-gray-100">
                  <img className=" max-h-[200px]" src={`${BASE_URL}/${product.image_small}`} />
                </div>
                <div className="col-span-10 font-medium text-black p-4 bg-gray-50 hover:bg-gray-100">
                  <ProductDetails product={product} rating={true} />
                  <div className="text-xl xl:text-2xl font-semibold">
                    {Currency.format(product.price)}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
    </div>
  );
};

export default SearchResults;
