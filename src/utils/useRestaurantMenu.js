import {useState, useEffect} from "react";

const useRestaurantMenu = (resId) => {
    
    const [restaruantMenu, setRestaruantMenu] = useState()

    async function getResturantMenu(){
        try{
            const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.894154440106067&lng=80.95963630825281&restaurantId=${resId}&submitAction=ENTER`)
            const json = await data.json(data);
            setRestaruantMenu(json?.data?.cards)
        }catch(error){
            setRestaruantMenu(null);
        }
        
    }

    useEffect(() => {
        getResturantMenu();
    },[])

    return restaruantMenu
}

export default useRestaurantMenu;