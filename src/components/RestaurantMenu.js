import {useState} from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import UseRestaurantMenu from "../utils/useRestauranMenu";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu = () => {
    const {resId} = useParams();
    const resInfo = UseRestaurantMenu(resId);
    const [showIndex,setShowIndex]= useState(null);

    if(resInfo.length === 0 )    return  (<Shimmer/>) ;
    const { name,cuisines } = resInfo?.cards[2]?.card?.card?.info;
    //filters all cards to get json of items categories
    const categories = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" );
    return  (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <h3 className="my-6">{cuisines.join(", ")}</h3>
            <h1 className=" md-6 font-bold text-xl">MENU</h1>
            {
                categories.map( (category,index) => <RestaurantCategory 
                key= {category?.card?.card?.title}
                data={category?.card?.card}
                showItems = { index === showIndex }
                setShowIndex = { () => setShowIndex(index === showIndex ? null : index) }
                /> )
            }
        </div>
    )
};
export default RestaurantMenu;