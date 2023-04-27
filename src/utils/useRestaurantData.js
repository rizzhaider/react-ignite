import { useState, useEffect } from "react";

const useRestaurantData = () => {

    const [allRestaurantLists, setAllRestaruantsLists] = useState([]);
    const [filteredRestaruants, setFilteredRestaruants] = useState([])

    async function getResturants() {
       try {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.894154440106067&lng=80.95963630825281&page_type=DESKTOP_WEB_LISTING")
        const json = await data.json();
        setAllRestaruantsLists(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaruants(json?.data?.cards[2]?.data?.data?.cards);
       } catch (error) {
        setAllRestaruantsLists(null);
        setFilteredRestaruants(null);
       }  
    }
    
    useEffect(() => {
        getResturants();
    }, [])

    return [allRestaurantLists, filteredRestaruants, setFilteredRestaruants]
}

export default useRestaurantData;