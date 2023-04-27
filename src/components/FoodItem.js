import { IMG_CDN_URL } from "../../constants";

const FoodItem = (
    {imageId, name, price}
) => {
    return (
        <div className='w-52 p-2 m-2 bg-pink-50 shadow-lg'>
        <img alt="logo"
            src={IMG_CDN_URL + imageId} />
            <h2 className="font-bold text-lg">{name}</h2>
        <h2 className="font-bold text-sm">${price/ 100}</h2>
    </div>
    )
}

export default FoodItem;
