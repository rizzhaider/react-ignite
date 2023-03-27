import RestaurantCard from './RestaurantCard'
import { restaruntList} from '../constants';
import { useState } from 'react';

function filterDatas(searchText, restaruntListFromState) {
    if(searchText === ""){
       return restaruntList;
    }else {
        const filterData = restaruntListFromState.filter(restaurant => {
            return restaurant.data.name.includes(searchText);
          });
          return filterData;
    }
    
  }

const Body = () => {
    const [restaruants, setRestaruants] = useState(restaruntList)
    const [searchText, setSearchText] = useState("");

    
    return (
        <>
        <div className='search-container'>
         <input 
         type="text"
         className="search-input"
         placeholder="Search"
         value={searchText}
         onChange={(e) => {
          setSearchText(e.target.value);
         }}
         />
         <button className='search-btn' onClick={() => {
            const filterData =  filterDatas(searchText, restaruants);
            setRestaruants(filterData);
         }}>Search</button>
        </div>
        <div className='restaruant-list'>
            {restaruants.map((restaruntItem) => {
                return <RestaurantCard key={restaruntItem.data.id} {...restaruntItem.data} />
            })}



        </div>
        </>

    )
}


export default Body;