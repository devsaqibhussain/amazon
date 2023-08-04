import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ProductDetails from "./ProductDetails";
import { BASE_URL, Currency } from "../utils/constants";
import { removeFromCart } from "../redux/cartSlice";

const CheckOut = () => {
  const products = useSelector((state) => state.cart.products);
  const itemsNumber = useSelector((state) => state.cart.productsNumber);
  const dispatch = useDispatch();
  const subTotal = useSelector((state) =>
    state.cart.products.reduce(
      (subTotal, product) => subTotal + product.price * product.quantity,
      0
    )
  );

  return (
    <div className="h-screen bg-gray-300">
      <div className="min-w-[1000px] max-w-[1400px] m-auto pt-8">
        <div className="grid grid-cols-8 gap-10">
          {/* Products */}
          <div className=" col-span-6 bg-white rounded">
            <div className="text-2xl xl:text-3xl p-4 font-semibold">
              Shoping Cart
            </div>
            {products.map((product) => {
              return (
                <div key={product.id}>
                  <div className=" grid grid-cols-12 divide-y-2 p-4 divide-gray-200">
                    <div className=" col-span-2">
                      <Link to={`/product/${product.id}`}>
                        <div className="p-2 ">
                          <img
                            className="m-auto w-[150px]"
                            src={`${BASE_URL}/${product.image_small}`}
                            alt=""
                          />
                        </div>
                      </Link>
                    </div>
                    <div className=" col-span-4">
                      <div className="ml-4 mt-2">
                        <ProductDetails product={product} rating={false} />

                        {/* Delete BTN */}
                        <div>
                          <button
                            className=" text-blue-500 text-sm xl:text-base font-semibold"
                            onClick={() => dispatch(removeFromCart(product.id))}
                          >
                            {" "}
                            Delete{" "}
                          </button>
                        </div>

                        <div className="flex mt-2">
                          <div className=" bg-gray-400 w-[25px] text-center rounded text-xl xl:text-2xl">
                            -
                          </div>
                          <div className=" bg-gray-300 w-[50px] text-center rounded text-lg xl:text-xl">
                            {product.quantity}
                          </div>
                          <div className=" bg-gray-400 w-[25px] text-center rounded text-xl xl:text-2xl">
                            +
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" col-span-6">
                      <div className=" text-xl xl:text-2xl font-bold text-center mt-10">
                        {Currency.format(product.price)}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
            <div>
              <div className=" text-right mr-10 mb-5 text-sm xl:text-base font-semibold">
                SubTotal ({itemsNumber} items):
                <span className=" font-bold ml-5 text-lg xl:text-xl">
                  {Currency.format(subTotal)}
                </span>
              </div>
            </div>
          </div>
          {/* Checkout */}
          <div className=" col-span-2 h-[200px] rounded bg-white p-4">
            <div>
              <div className=" text-xs text-green-700">
                Your order qualifies for{" "}
                <span className="font-bold">FREE DELIVERY</span>. Delivery
                Details:
              </div>
            </div>

            <div className="grid grid-cols-2 mt-5">
              <div className=" col-span-1 text-left text-xs xl:text-sm font-semibold">
                SubTotal ({itemsNumber} items):
              </div>
              <div className="col-span-1 text-right text-sm xl:text-base font-bold">
                {Currency.format(subTotal)}
              </div>
            </div>
            <button className="btn mt-8">Proceed to Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
