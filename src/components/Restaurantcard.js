import { CDN_URL } from "../utils/constants";

const Restaurentcard = (prop) => {
    const { resdata } = prop;
    const { cloudinaryImageId, name, cuisines, avgRating,costForTwo,locality } = resdata?.info;
    console.log(resdata);
      return (
          <div className="res-card" >
              <img className="res-logo" alt="restaurent logo" 
                  src={ CDN_URL + cloudinaryImageId}/> 
              <h3 className="res-details" >{name}</h3>
              <h4 className="res-details">{"Cuisines: "+ cuisines.join(", ")}</h4>
              <h4 className="res-details">{locality}</h4>
              <h4 className="res-details">Rating: {avgRating}</h4>
              <h4 className="res-details">costForTwo: {costForTwo}</h4>
          </div>
      );
  };
export default Restaurentcard;