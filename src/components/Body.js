import Restaurantcard  from "./Restaurantcard";
import Foodcarousel from "./Foodcarousel";
import { useState} from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useListofRes from "../utils/useListofRes";
import useFoodCarousel from "../utils/useFoodCarousel";;
const Body = () => {
    // state variables
    const [originalList,setoriginalList,filteredlistofRes, setfilteredlistofRes] = useListofRes();
    const [foodcarousel,setfoodcarousel] = useFoodCarousel();
    const [searchText, setsearchText] = useState('');
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
    return  filteredlistofRes.length === 0  ? (<Shimmer />) : (
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