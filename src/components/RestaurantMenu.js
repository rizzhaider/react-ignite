import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { IMG_CDN_URL } from "../../constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";

const RestaruntMenu = () => {
    const { resId } = useParams();
    const restaruantMenu = useRestaurantMenu(resId);
    const dispatch = useDispatch()
     
    const handleAddItem = (card) => {
        dispatch(addItem(card))
    }

    return !restaruantMenu ? <Shimmer /> : (
        <>
            <div className="border-b-2 m-2 p-2">
                <img src={IMG_CDN_URL + restaruantMenu[0]?.card?.card?.info?.cloudinaryImageId} className="w-52" />
                <h3 className="text-sm text-gray-500">{restaruantMenu[0]?.card?.card?.info?.name}</h3>
                <h3 className="text-sm text-gray-500">{restaruantMenu[0]?.card?.card?.info?.cuisines.join(", ")}</h3>
                <h3 className="text-sm text-gray-500">{restaruantMenu[0]?.card?.card?.info?.avgRating} stars</h3>
                <h3 className="text-sm text-gray-500">{restaruantMenu[0]?.card?.card?.info?.areaName}</h3>
                <h3 className="text-sm text-gray-500">{restaruantMenu[0]?.card?.card?.info?.sla?.lastMileTravelString}</h3>
            </div>
            <div className="border-b-2 m-2 p-2">
                <h1 className="font-bold text-xl">Offers</h1>
                {restaruantMenu[1]?.card?.card?.gridElements?.infoWithStyle?.offers?.map(item => {
                    return <h3 key={item?.info?.header}>{item?.info?.header}</h3>
                })}
            </div>
            <div className="border-b-2 m-2 p-2">
                <h1 className="font-bold text-xl">Recomende Menu</h1>

                {
                    restaruantMenu[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.find(card => {
                        return card?.card?.card?.type === "CATEGORY_TYPE_RECOMMENDED"
                    })?.card?.card?.itemCards.map(cardItem => {
                        // {console.log(card?.card?.info)}
                        return (
                            <div key={cardItem?.card?.info?.id} className="flex justify-between m-2 p-2">
                                <h3 className="text-md text-gray-500"> {cardItem?.card?.info?.name} <br /> {cardItem?.card?.info?.price / 100} $</h3>
                                <div className="w-36">
                                    <img src={IMG_CDN_URL + cardItem?.card?.info?.imageId} className="w-auto rounded-lg" />
                                    <button data-testid="add-item-btn" className="bg-green-200 text-xs p-2 border border-green-600 rounded-lg"
                                    onClick={() => handleAddItem(cardItem)}>ADD</button>
                                </div>
                            </div>

                        )

                    })
                }

            </div>
        </>


    )
}

export default RestaruntMenu;