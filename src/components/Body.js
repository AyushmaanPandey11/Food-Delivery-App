import Restaurantcard, {WithQuickDelivery}  from "./Restaurantcard";
import Foodcarousel from "./Foodcarousel";
import { useState, useContext} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useListofRes from "../utils/useListofRes";
import useFoodCarousel from "../utils/useFoodCarousel";
import UserContext from "../utils/UserContext";
const Body = () => {
    // state variables
    const [originalList,setoriginalList,filteredlistofRes, setfilteredlistofRes] = useListofRes();
    const [foodcarousel,setfoodcarousel] = useFoodCarousel();
    const [searchText, setsearchText] = useState('');
    const QuickDelRestaurant = WithQuickDelivery(Restaurantcard);
    const {LoggedInUser,setUserName} = useContext(UserContext);
    // reset button 
    const resetList = () => {
      setfilteredlistofRes(originalList);
    }
    // top element button
    const filterTopRestaurant = () => {
      const filteredList = originalList.filter(
      (res) => res.info.avgRating >= 4.5 );
      setfilteredlistofRes(filteredList);
    }
    // serached restaurant
    const searchType = (e) => {
      setsearchText(e.target.value);
    } 
    const searchResult = () =>{
      const searchList = originalList.filter( (res) => res.info.name.toLowerCase().includes( searchText.toLowerCase() ) 
      )
      setfilteredlistofRes(searchList);
    }
    return  (filteredlistofRes.length === 0 || foodcarousel.length === 0)  ? (<Shimmer />) : (
        <div className="body" >
            <div className="mx-5" >
              <input className="border-solid border-black border h-7 mr-3" value={searchText} onChange={searchType} ></input>
              <button className="border-solid w-20 h-7 text-center mt-6 bg-red-400" onClick={searchResult}>Search</button>
              <label className="ml-5 mr-2 font-bold">UserName</label>
              <input className="border-black border border-solid" 
                value = {LoggedInUser} 
                onChange={ (e)=> setUserName(e.target.value) }
                 />
            </div>
            <div className=" m-5" >
              <button className="border-3 w-40 h-7 bg-yellow-500 mr-6 rounded-sm" 
                onClick={ filterTopRestaurant }
              >
                Top Rated Restaurants
              </button>
              <button className="border-3 w-20 h-7 bg-yellow-500 rounded-sm" onClick={resetList} >
                Home
              </button>
            </div>
            <div className="ml-[150px]" >
              <h2 className="text-3xl text-black solid my-[10px]"> What are you looking for?.. </h2>
              <div className="flex flex-wrap " >
                {
                  foodcarousel.map((item)=>(
                    <Foodcarousel key = { item?.id } itemsdata = {item} />
                  ))
                }
              </div>
            </div>
            <div className="mx-[150px] " >
              <h2 className="text-3xl text-black solid my-[10px]">Restaurants Nearby..</h2>
              <div className=" flex flex-wrap ">
                { 
                  filteredlistofRes.map((restaurant) => (
                  <Link key={restaurant?.info?.id} to={"/restaurants/"+restaurant?.info?.id}>
                    {restaurant?.info?.sla?.deliveryTime <= 35 ? <QuickDelRestaurant resdata={restaurant}/> : <Restaurantcard  resdata={restaurant}/>}
                    </Link>
                  ))
                }   
              </div>
            </div>
        </div>
    );
  };
export default Body;