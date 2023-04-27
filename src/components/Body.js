import RestaurantCard from './RestaurantCard'
import { useState, useContext } from 'react';
import Shimmer from './Shimmer';
import { NavLink } from "react-router-dom";
import { filterDatas } from '../utils/helper';
import useRestaurantData from '../utils/useRestaurantData';
import useOnline from '../utils/useOnline';
import UserContext from '../utils/userContext';
import UseCompContext from '../utils/useCompContext';
import { fetchUserName } from '../utils/cartSlice';
import { useDispatch } from 'react-redux';



const Body = () => {
    const [allRestaurantLists, filteredRestaruants, setFilteredRestaruants] = useRestaurantData();
    const [searchText, setSearchText] = useState("");
    const isOnline = useOnline();
    const {user, setUser} = useContext(UserContext);
    const disptach = useDispatch();
    
     const updateUserNameHandle = () => {
        disptach(fetchUserName())
     }
    if(!isOnline) return <h1>Sorry, not internet connection !</h1>

    //this is early return
    if (!allRestaurantLists) return null;

    //this is condiotnal rendering
    return (
        allRestaurantLists?.length === 0 ? <Shimmer /> : (
            <>
                 
                <div className='m-2'>
                    <input
                    data-testid="search-input"
                        type="text"
                        className="placeholder:italic placeholder:text-slate-400 bg-white border border-slate-300 rounded-md py-2 pl-2 pr-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                        placeholder="Search Restaurant"
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                    />
                    <button data-testid="search-btn" className='bg-purple-400 p-2 rounded-full mx-2 hover:bg-purple-500' onClick={() => {
                        const filterData = filterDatas(searchText, allRestaurantLists);
                        setFilteredRestaruants(filterData);
                    }}>Search</button>
                    <button className='bg-purple-400 p-2 rounded-full mx-2 hover:bg-purple-500' onClick={() => {
                        const filterData = allRestaurantLists.filter(data => {

                            return +data?.data?.avgRating > 4;
                        })
                        setFilteredRestaruants(filterData);
                    }}>
                        Top rated resturants
                    </button>
                    <button className='bg-purple-400 p-2 rounded-full mx-2 hover:bg-purple-500' onClick={() => updateUserNameHandle()}>
                        Update user name
                    </button>
                    <input
                        type="text"
                        className="placeholder:italic placeholder:text-slate-400 bg-white border border-slate-300 rounded-md py-2 pl-2 pr-2 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                        placeholder="Update User"
                        value={user.name}
                        onChange={(e) => {
                            setUser({...user, name:e.target.value});
                        }}
                    />
                </div>
                
                <div className='flex flex-wrap' data-testid="resList">
                    {
                        filteredRestaruants?.length === 0 ? <h1>No Restarunt Found!</h1> :
                            filteredRestaruants.map((restaruntItem) => {
                                return <NavLink key={restaruntItem.data.id} to={"/restaurant/" + restaruntItem.data.id}>
                                    <RestaurantCard  {...restaruntItem.data} />
                                </NavLink>


                            })
                    }

                </div>
            </>

        )

    )
}


export default Body;