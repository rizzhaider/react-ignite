import { NavLink } from "react-router-dom";
import useOnline from "../utils/useOnline";
import logo from "../assets/img/logo512.png"
import { useSelector } from "react-redux";

export const Title = () => {
    return (
        <img
            data-testid="logo"
            alt="logo"
            className='h-20'
            src={logo} />

    )
}

const Header = () => {
    const isOnline = useOnline();
    const cartItems = useSelector(store => store.cart.items);
    const name = useSelector(store => store.cart.name);
    return (
        <div className='flex justify-between p-2 bg-purple-400'>
            <Title />
            <div className="pt-4">
                <ul className="flex py-4">
                    <li className="pr-3"><NavLink to="/">
                        Home
                    </NavLink></li>
                    <li className="pr-3"><NavLink to="/about">
                        About Us
                    </NavLink></li>
                    <li className="pr-3">{name}</li>
                    <li className="pr-3"><NavLink to="/cart" data-testid="cart" >
                        Cart - {cartItems.length} items
                    </NavLink></li>
                    <li className="pr-3"><NavLink to="/instamart">
                        Instamart
                    </NavLink></li>
                    <li data-testid="userOnline" className="pr-3">{isOnline ? "🟢" : "🔴"}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;