import Restaurantcard  from "./Restaurantcard";
import { useEffect,useState} from "react";
import cardobj from "../utils/mockData";
const Body = () => {
    const [originalList,setoriginalList] = useState(cardobj); // just to store the original values 
    const [filteredlistofRes, setfilteredlistofRes] = useState(originalList); // used to in functions as it will keep changin afte events
    
    useEffect( ()=>{fetchdata()} ,[]);
    const fetchdata = async () => {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4399295&lng=78.4982741&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json = data.json();
      // setlistofRes(json?.data?.cards?.card[4]?.card?.card?.gridElements?.restaurants);
      // setoriginalList(json?.data?.cards?.card[4]?.card?.card?.gridElements?.restaurants);
    }
    const resetList = () => {
      setfilteredlistofRes(originalList);
    }
    const filterTopRestaurant = () => {
      const filteredList = originalList.filter(
      (res) => res.info.avgRating >= 4.5 );
      setfilteredlistofRes(filteredList);
    }
    return (
        <div className="body" >
            <div className="search" >Search Bar</div>
            <div className="filter" >
              <button className="filter-btn" 
                onClick={ filterTopRestaurant }
              >
                Top Restaurants
              </button>
              <button className="filter-btn" onClick={resetList} >
                Home
              </button>
            </div>
            <div className="res-container" >
                { filteredlistofRes.map((restaurant) => (
                  <Restaurantcard key = { restaurant?.info?.id} resdata={restaurant}/>
                )) }
            </div>
        </div>
    );
  };
export default Body;