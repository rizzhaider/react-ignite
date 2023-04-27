import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
    const cartItems = useSelector(store => store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = () => {
         dispatch(clearCart())
    }
    if (cartItems.length === 0) return <h1 className="m-2 p-2">Cart is Empty</h1>;
    return (
        <>
            <div className="flex">{
                cartItems.map((cartItem, i) => {
                    return (
                        <FoodItem key={i} {...cartItem?.card?.info} />
                    )
                })
            }
            </div>

            <button className="m-2 p-2 border bg-green-200 border-green-500 rounded-lg"
                onClick={() => handleClearCart()}>Clear Cart</button>

        </>
    )
}

export default Cart;