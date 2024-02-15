import { MENU_URL } from "./constants";
import { useState, useEffect } from "react";
const UseRestaurantMenu = (resId) => {
    const [resInfo,setresInfo] = useState([]);
    useEffect( async () => {
        const data = await fetch(MENU_URL+resId);
        const json = await data.json();
        setresInfo(json?.data);
    } ,[]);
    return resInfo;
}
export default UseRestaurantMenu;