import { CDN_URL } from "../utils/constants";

const Restaurentcard = (prop) => {
    const { resdata } = prop;
    const { cloudinaryImageId, name, cuisines, avgRating,costForTwo,locality } = resdata?.info;
      return (
          <div className=" shadow-lg m-5 py-4 px-3 h-[550px] w-[270px] bg-gray-300 flex-wrap " >
                <img className="rounded-md border-solid border-black w-[250] h-[250]" alt="restaurent logo" 
                  src={ CDN_URL + cloudinaryImageId}/> 
                <div className="flex flex-wrap my-2 py-2 text-base ">
                    <h3 className="py-[5px] text-xl solid " >{name}</h3>
                    <h4 className="py-[5px]">{"Cuisines: "+ cuisines.join(", ")}</h4>
                    <h4 className="py-[5px]">{locality}</h4>
                    <h4 className="py-[5px]">Rating: {avgRating}</h4>
                    <h4 className="py-[5px]">costForTwo: {costForTwo}</h4>
                </div>
          </div>
      );
  };

// Higher Order Component for quick delivery(below 30mins)

export const WithQuickDelivery = (Restaurantcard) => {
  //return a functional component
  return (props) => {
    return (
      <div>
        <label className=" absolute bg-black text-white m-2 p-2 rounded-lg ml-2">Fast delivery</label>
        <Restaurantcard  {...props} />
      </div>
    );
  }
}

export default Restaurentcard;