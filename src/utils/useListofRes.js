import { SWIGGY_API } from "../utils/constants";
import { useState, useEffect } from "react";
import { mock } from "./mockData";

const useListofRes = () => {
    const [originalList,setoriginalList] = useState(mock);  
    const [filteredlistofRes, setfilteredlistofRes] = useState(mock);
    useEffect(() => {
        async function fetchData() {
            try {
                const data =  await fetch(SWIGGY_API);
                const json = await data.json();
                setoriginalList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
                setfilteredlistofRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchData(); 
    }, []);
    
    return [originalList,setoriginalList,filteredlistofRes,setfilteredlistofRes];
};
export default useListofRes;