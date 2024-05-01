import { useDispatch } from "react-redux";
import { MENU_URL } from "../utils/constants";
import {  useEffect } from "react";
import { addMenuItems } from "../utils/redux/menuSlice";
const UseRestaurantMenu = (resId) => {
    const dispatch = useDispatch(); 
    useEffect(() => {
        const fetchdata = async () => {
            try {
                const data = await fetch(MENU_URL + resId);
                const json = await data.json();
                const menu=json?.data;
                dispatch(addMenuItems(menu));
            } catch (error) {
                console.error("Error fetching restaurant menu:", error);
            }
        };
        fetchdata();
    }, [resId]); 
};

export default UseRestaurantMenu;
