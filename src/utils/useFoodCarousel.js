import { useState,useEffect } from "react";
import { SWIGGY_API } from "../utils/constants";
const useFoodCarousel = () => {
    const [foodcarousel,setfoodcarousel] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetch(SWIGGY_API);
                const json = await data.json();
                setfoodcarousel(json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info);
            } catch (error) {
                
                console.error("Error fetching data:", error);
            }
        };
        
        fetchData();
        
    }, []);
    
    return [foodcarousel,setfoodcarousel];
};
export default useFoodCarousel;