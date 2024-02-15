import {useState, useEffect} from "react";
import { MENU_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import UseRestaurantMenu from "../utils/useRestauranMenu";
const RestaurantMenu = () => {
    const {resId} = useParams();
    const resInfo = UseRestaurantMenu(resId);
    if(resInfo.length === 0 )    return  (<Shimmer/>) ;

    const { name,cuisines,costForTwoMessage,areaName,avgRating } = resInfo?.cards[0]?.card?.card?.info;
    const { itemCards } = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;
    return  (
        <div>
            <h1>{name}</h1>
            <h3>{costForTwoMessage}</h3>
            <h3>{cuisines.join(", ")}</h3>
            <h3>Rating - {avgRating}</h3>
            <h3>{areaName}</h3>  
            <h1>MENU</h1>
            <ul>
                {itemCards.map( item => <li key={item.card.info.id}> {item.card.info.name} - Rs. {(item.card.info.price)/100} </li> )}
            </ul>
        </div>
    )
};
export default RestaurantMenu;