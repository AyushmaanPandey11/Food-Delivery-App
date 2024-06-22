import { CDN_URL } from "../utils/constants";

const Restaurentcard = (prop) => {
    const { resdata } = prop;
    const { cloudinaryImageId, name, cuisines, avgRating,costForTwo,locality } = resdata?.info;
      return (
          <div data-testid="rescards" className=" shadow-lg m-5 py-4 px-3 h-[440px] w-[270px] bg-gray-300 flex-wrap " >
                <img className="rounded-md border-solid border-black w-[250] h-[230] " alt="restaurent logo" 
                  src={ CDN_URL + cloudinaryImageId}/> 
                <div className="flex flex-wrap py-2 text-base ">
                    <h3 className="pt-[5px] text-xl font-bold " >{name}</h3>
                    <h4 className="pt-[5px]">{"Cuisines: "+ cuisines.join(", ")}</h4>
                    <h4 className="pt-[5px]">locality: {locality}</h4>
                    <h4 className="pt-[5px]">Rating: {avgRating}</h4>
                    <h4 className="pt-[5px]">costForTwo: {costForTwo}</h4>
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
        <label  className="  absolute bg-black text-white m-2 p-2 rounded-lg ml-2">Fast delivery</label>
        <Restaurantcard  {...props} />
      </div>
    );
  }
}

export default Restaurentcard;