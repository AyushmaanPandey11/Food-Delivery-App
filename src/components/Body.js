import Restaurantcard  from "./Restaurantcard";
import Foodcarousel from "./Foodcarousel";
import { useEffect,useState} from "react";
import Shimmer from "./Shimmer";
import { SWIGGY_API } from "../utils/constants";
import { Link } from "react-router-dom";
const Body = () => {
    const [originalList,setoriginalList] = useState([]); // just to store the original values 
    const [filteredlistofRes, setfilteredlistofRes] = useState([]); // used to in functions as it will keep changin afte events
    const [foodcarousel,setfoodcarousel] = useState([]);
    const [searchText, setsearchText] = useState([]);

    // fetching data from swiggy api
    useEffect( ()=>{fetchdata()} ,[]);
    const fetchdata = async () => {
      const data = await fetch(SWIGGY_API);
      const json = await data.json();
      setfoodcarousel(json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info);
      setfilteredlistofRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setoriginalList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
    // reset button 
    const resetList = () => {
      setfilteredlistofRes(originalList);
    }
    // top element button
    const filterTopRestaurant = () => {
      const filteredList = originalList.filter(
      (res) => res.info.avgRating >= 3.5 );
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
    return  filteredlistofRes.length === 0 && foodcarousel.length === 0 ? (<Shimmer />) : (
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
            <div className="food-carousel-container" >
              <h2> What are you looking for?.. </h2>
              <div className="food-carousel" >
                {
                  foodcarousel.map((item)=>(
                    <Foodcarousel key = { item?.id } itemsdata = {item} />
                  ))
                }
              </div>
            </div>
            <div className="resCards" >
              <h2>Restaurants Nearby..</h2>
              <div className="res-container">
                { 
                  filteredlistofRes.map((restaurant) => (
                  <Link key={restaurant?.info?.id} to={"/restaurants/"+restaurant?.info?.id}><Restaurantcard  resdata={restaurant}/></Link>
                  ))
                }   
            </div>
            </div>
            <div className="MoreRes-btn">
              <button  > 
                More
              </button>
            </div>
        </div>
    );
  };
export default Body;