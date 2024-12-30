import { LOGO_URL } from "../utils/constants";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between items-center bg-red-500 text-white px-6 py-4 shadow-md">
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-2">
          <img className="w-12 h-12 rounded-full" src={LOGO_URL} alt="logo" />
          <h1 className="text-xl font-bold">Food on Wheels</h1>
        </div>
      </div>

      <div className="flex items-center justify-between gap-4 h-full">
        <ul className="flex gap-6 font-semibold">
          <li className="hover:text-black transition duration-200 cursor-pointer">
            Online Status : {onlineStatus ? "🌐" : "💔"}
          </li>
          <li className="hover:text-black transition duration-200 cursor-pointer">
            <Link to="/">Home</Link>
          </li>
          <li className="hover:text-black transition duration-200 cursor-pointer">
            <Link to="/about">About Us</Link>
          </li>
          <li className="hover:text-black transition duration-200 cursor-pointer">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="hover:text-black transition duration-200 cursor-pointer">
            <Link to="/cart">Cart({cartItems.length})</Link>
          </li>
          <button
            className="bg-red-500 text-white px-4 h-full rounded border border-red-500 hover:bg-white hover:text-black transition duration-300 cursor-pointer flex items-center"
            onClick={() => {
              btnNameReact == "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
          <li className="hover:text-black transition duration-200 cursor-pointer">
            {loggedInUser}
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
