import { useContext } from "react";
import { IMG_CDN_URL } from "../../constants"
import UserContext from "../utils/userContext";

 const RestaurantCard = ({
    name,
    cloudinaryImageId,
    cuisines,
    avgRating
}) => {
    const {user} = useContext(UserContext)
    return (
        <div className='w-52 p-2 m-2 bg-pink-50 shadow-lg'>
            <img alt="logo"
                src={ IMG_CDN_URL + cloudinaryImageId} />
            <h2 className="font-bold text-xl">{name}</h2>
            <h3>{cuisines.join(", ")}</h3>   
            <h4>{avgRating} stars</h4>
            <h6 className="text-sm">Name:{user.name}</h6>
            <h6 className="text-sm">Email:{user.email}</h6>
        </div>
    )
}

export default RestaurantCard;