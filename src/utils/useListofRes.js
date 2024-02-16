import { SWIGGY_API } from "../utils/constants";
import { useState, useEffect } from "react";
const useListofRes = () => {
    const [originalList,setoriginalList] = useState([]);  
    const [filteredlistofRes, setfilteredlistofRes] = useState([]);
    useEffect( async () => {
        const data = await fetch(SWIGGY_API);
        const json = await data.json();
        setoriginalList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredlistofRes(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    },[]);
    return [originalList,setoriginalList,filteredlistofRes,setfilteredlistofRes];
};
export default useListofRes;