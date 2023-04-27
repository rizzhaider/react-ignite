import { useEffect, useContext } from "react";
import useLocalStorage from "../utils/useLocalStorage";
import UserContext from "../utils/userContext";

const Footer = () => {
    const {user} = useContext(UserContext);
    const [valueFooter, setValueFooter] = useLocalStorage();

    useEffect(() => {
        console.log(user)
        //setValueFooter("Name", "LEO")
    },[])
    return (
        <>
        <h2>{valueFooter}</h2>
        <h1 className="p-2">Footer</h1>
        <h3 className="p-2">Name: {user.name}</h3>
        <h3 className="p-2">Email: {user.email}</h3>
        </>
    )
};

export default Footer;