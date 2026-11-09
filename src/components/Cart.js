import { useDispatch, useSelector } from "react-redux";
import {clearCart} from "../utils/cartSlice";
import ItemList from "./ItemList";

const Cart = () => {
  //make sure to subscribe to the specific portion of the store
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleRemoveItems = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-4 p-4">
      <h1 className="bold">Cart</h1>
      <button className="bg-black m-2 p-2 text-white rounded-lg" onClick={handleRemoveItems}>
        Clear Cart 
      </button>
      {cartItems.length === 0 && <h1>Oops! Your cart is empty. Add items to the card</h1>}
      <div className="w-6/12 bg-gray-100 m-auto">
        <ItemList items={cartItems} />
      </div>
    </div>
  )
};
export default Cart;