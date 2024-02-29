import { MENU_URL } from "./constants";
import { useState, useEffect } from "react";

const UseRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState([]);

    useEffect(() => {
        const fetchdata = async () => {
            try {
                const data = await fetch(MENU_URL + resId);
                const json = await data.json();
                setResInfo(json?.data);
            } catch (error) {
                console.error("Error fetching restaurant menu:", error);
            }
        };
        fetchdata();
    }, [resId]); 

    return resInfo;
};

export default UseRestaurantMenu;
