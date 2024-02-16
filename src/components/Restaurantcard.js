import { CDN_URL } from "../utils/constants";

const Restaurentcard = (prop) => {
    const { resdata } = prop;
    const { cloudinaryImageId, name, cuisines, avgRating,costForTwo,locality } = resdata?.info;
      return (
          <div className=" shadow-lg m-5 py-4 px-3 h-[450px] w-[270px] bg-gray-300" >
                <img className="rounded-md border-solid border-black w-[250] h-[250]" alt="restaurent logo" 
                  src={ CDN_URL + cloudinaryImageId}/> 
                <div className="flex flex-wrap my-2 py-2 text-lg">
                    <h3 className="res-details" >{name}</h3>
                    <h4 className="res-details">{"Cuisines: "+ cuisines.join(", ")}</h4>
                    <h4 className="res-details">{locality}</h4>
                    <h4 className="res-details">Rating: {avgRating}</h4>
                    <h4 className="res-details">costForTwo: {costForTwo}</h4>
                </div>
          </div>
      );
  };
export default Restaurentcard;