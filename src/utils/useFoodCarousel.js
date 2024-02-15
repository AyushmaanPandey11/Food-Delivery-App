import { useState,useEffect } from "react";
import { SWIGGY_API } from "../utils/constants";
const useFoodCarousel = () => {
    const [foodcarousel,setfoodcarousel] = useState([]);
    useEffect( async () => {
        const data = await fetch(SWIGGY_API);
        const json = await data.json();
        setfoodcarousel(json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info);
    },[]);
    return [foodcarousel,setfoodcarousel];
};
export default useFoodCarousel;