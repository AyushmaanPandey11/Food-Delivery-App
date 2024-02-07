import Restaurantcard  from "./Restaurantcard";
import { useEffect,useState} from "react";
//import cardobj from "../utils/mockData";
import Shimmer from "./Shimmer";
const Body = () => {
    const [originalList,setoriginalList] = useState([]); // just to store the original values 
    const [filteredlistofRes, setfilteredlistofRes] = useState(originalList); // used to in functions as it will keep changin afte events
    const [searchText, setsearchText] = useState([]);
    useEffect( ()=>{fetchdata()} ,[]);
    const fetchdata = async () => {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.4399295&lng=78.4982741&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      setfilteredlistofRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setoriginalList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    const resetList = () => {
      setfilteredlistofRes(originalList);
    }
    const filterTopRestaurant = () => {
      const filteredList = originalList.filter(
      (res) => res.info.avgRating >= 3.5 );
      setfilteredlistofRes(filteredList);
    }
    const searchType = (e) => {
      setsearchText(e.target.value);
    } 
    const searchResult = () =>{
      const searchList = originalList.filter( (res) => res.info.name.toLowerCase().includes( searchText.toLowerCase() ) 
      )
      setfilteredlistofRes(searchList);
    }
    return  filteredlistofRes.length === 0 ? (<Shimmer />) : (
        <div className="body" >
            <div className="search" >
              <input className="search-box" value={searchText} onChange={searchType} ></input>
              <button className="search-btn" onClick={searchResult}>Search</button>
            </div>
            <div className="filter" >
              <button className="filter-btn" 
                onClick={ filterTopRestaurant }
              >
                Top Rated Restaurants
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