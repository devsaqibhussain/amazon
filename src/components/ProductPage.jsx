import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { callAPI } from "../utils/CallApi";
import { ProductDetails } from "./";
import { BASE_URL, Currency } from "../utils/constants";
import { addToCart } from "../redux/cartSlice";
const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState("1")
  const dispatch = useDispatch();

  const getProduct = () => {
    callAPI(`data/products.json`).then((productResults) => {
      setProduct(productResults[id]);
    });
  };
  const addQuantityToProduct = () =>{
    setProduct(product.quantity = quantity)
    return product
  }
  useEffect(() => {
    getProduct();
  }, []);
  if (!product?.title) return <h1>Loading Page...</h1>;

  return (
    product && (
      <div className="bg-gray-300 h-screen">
        <div className="min-w-[1000px] max-w-[1500px] m-auto bg-gray-300 p-4">
          <div className="grid grid-cols-10 gap-4">
            {/* Left */}
            <div className="col-span-3 p-8 rounded bg-white">
              <img className="m-auto" src={`${BASE_URL}/${product.image}`} />
            </div>
            {/* Middle */}
            <div className="col-span-5 bg-white divide-y divide-gray-300 p-8 rounded">
              <div className="mb-4">
                <ProductDetails product={product} rating={true} />
              </div>
              <div className="pt-3">{product.description}</div>
            </div>
            {/* Right */}
            <div className="col-span-2 bg-white rounded p-8 divide-y divide-gray-300">
              <div className="mb-4">
                <div className="text-red-500 text-right text-lg xl:text-xl font-semibold ">
                  {Currency.format(product.price)}
                </div>
                <div className=" text-right text-sm xl:text-base font-semibold ">
                  RRP:{" "}
                  <span className="text-gray-500 line-through ">
                    {Currency.format(product.oldPrice)}
                  </span>
                </div>
              </div>
              <div>
                <div className="text-blue-500 text-xs xl:text-sm font-semibold mb-1 mt-3">
                  FREE Return
                </div>
                <div className="text-blue-500 text-xs xl:text-sm font-semibold mb-1">
                  FREE Delivery
                </div>
                <div className="text-green-500 text-xs xl:text-sm font-semibold mb-1">
                  In Stock
                </div>
                <div className="flex text-sm items-center xl:text-base">
                  Quantity
                  <div className="ml-2">
                    <select onChange={(e)=>setQuantity(e.target.value)} className="bg-white border rounded-md p-2 focus:border-indigo-600">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                      <option>6</option>
                      <option>7</option>
                    </select>
                  </div>
                </div>
                  <Link to={'/checkout'}>
                    <button 
                      onClick = {() =>  dispatch(addToCart(addQuantityToProduct()))} 
                      className="w-full bg-yellow-400 p-4 rounded-md hover:bg-yellow-500 mt-4">
                        Add to Cart
                    </button>
                  </Link> 
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ProductPage;
