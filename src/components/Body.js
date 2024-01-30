import Restaurentcard  from "./Restaurentcard";
import cardobj from "../utils/mockData";
const Body = () => {
    return (
        <div className="body" >
            <div className="search" >Search Bar</div>
            <div className="res-container" >
                { cardobj.map((restaurent) => (
                  <Restaurentcard key = { restaurent.info.id} resdata={restaurent}/>
                )) }
            </div>
        </div>
    );
  };
export default Body;