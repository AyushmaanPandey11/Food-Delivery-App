import Restaurantcard  from "./Restaurantcard";
import { useEffect,useState} from "react";
//import cardobj from "../utils/mockData";
import Shimmer from "./Shimmer";
import { SWIGGY_API,SWIGGY_UPDATEAPI } from "../utils/constants";
const Body = () => {
    const [originalList,setoriginalList] = useState([]); // just to store the original values 
    const [filteredlistofRes, setfilteredlistofRes] = useState(originalList); // used to in functions as it will keep changin afte events
    const [searchText, setsearchText] = useState([]);
    const [originalpostList,setoriginalpostList] = useState([]);
    const [filteredpostList,setfilteredpostList] = useState(originalpostList);
    useEffect( ()=>{fetchdata()} ,[]);
    const fetchdata = async () => {
      const data = await fetch(SWIGGY_API);
      const json = await data.json();
      setfilteredlistofRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setoriginalList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
    
    //Post api call for more restaurent cards
    // const fetchpostdata = async () => {
    //   const data = await fetch(SWIGGY_UPDATEAPI, {
    //     method : "POST",
    //     headers : { "Content-type" : "application/json" },
    //     body : JSON.Stringify(data),
    //   } );
    //   // const updatejson = await data.json();
    //   // setoriginalpostList(updatejson?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    //   // setfilteredpostList(updatejson?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // };
    
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
                { 
                  filteredlistofRes.map((restaurant) => (
                  <Restaurantcard key = { restaurant?.info?.id} resdata={restaurant}/>
                  )) 
                }
            </div>
            {/* <div className="res-container" >
                  {
                    filteredpostList.map( (res)=>( 
                      <Restaurantcard key={ res?.info?.id } resdata={res}/>
                    ) )
                  }
            </div> */}
            <div className="MoreRes-btn">
              <button  > 
                More
              </button>
            </div>
        </div>
    );
  };
export default Body;