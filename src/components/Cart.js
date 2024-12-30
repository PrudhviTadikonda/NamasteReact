import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-10 p-10 bg-gray-100 rounded-lg shadow-lg">
      <h1 className="text-4xl font-extrabold text-red-600 mb-6">Your Cart</h1>
      <div className="relative w-8/12 m-auto bg-white p-6 rounded-lg shadow-md">
        <button
          className="absolute top-2 right-4 px-6 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition duration-300"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 ? (
          <h1 className="text-xl font-semibold text-gray-500 mt-6">
            Your Cart is Empty. Add items to the cart!
          </h1>
        ) : (
          <div className="mt-4">
            <ItemList items={cartItems} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
