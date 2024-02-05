import Restaurentcard  from "./Restaurentcard";
import { useState } from "react";
import cardobj from "../utils/mockData";
const Body = () => {
  const [listofRes, setlistofRes] = useState(cardobj);
    return (
        <div className="body" >
            <div className="search" >Search Bar</div>
            <div className="filter" >
              <button className="filter-btn" 
                onClick={ () => {
                  const filteredList = listofRes.filter(
                  (res) => res.info.avgRating > 4.5 );
                  setlistofRes(filteredList) 
                } }
              >
                Top Restaurents
              </button>
            </div>
            <div className="res-container" >
                { listofRes.map((restaurent) => (
                  <Restaurentcard key = { restaurent.info.id} resdata={restaurent}/>
                )) }
            </div>
        </div>
    );
  };
export default Body;