import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const { loggedInUser} = useContext(UserContext);
  //subscribing to the store
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <div className="flex justify-between bg-white shadow-lg">
      <div className="logo-container bg-white">
        <img className="w-27 h-32" src={LOGO_URL}/>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status:
            {onlineStatus ? "🟢 Online" : "🔴 Offline"}
           </li>
          <li className="px-4"><Link to="/">Home</Link></li>
          <li className="px-4"><Link to="/About">About Us</Link></li>
          <li className="px-4"><Link to="/Grocery">Grocery</Link></li>
          <li className="px-4"><Link to="/Contact">Contact Us</Link></li>
          <li className="px-4">
            <Link to="/Cart">Cart ({cartItems.length} items)</Link>
            </li>
          <button 
            className="px-4" 
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
            }}
          >{btnName}</button>
          <li className="px-4">
            {loggedInUser}
          </li>
        </ul>
      </div>
    </div> 
  )
};
export default Header;