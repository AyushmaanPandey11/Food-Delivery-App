import { SWIGGY_API } from "../utils/constants";
import {  useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addResItems } from "../utils/redux/mainPageSlice";
const useListofRes = () => {
    const dispatch = useDispatch();
    const originalList = useSelector((store)=>store?.ResAndCarousel?.restaurants);
    const filteredlistofRes = useSelector((store)=>store?.ResAndCarousel?.restaurants);
    useEffect(() => {
        async function fetchData() {
            try {
                const data =  await fetch(SWIGGY_API);
                const json = await data.json();
                const resList= json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
                dispatch(addResItems(resList));
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }
        fetchData(); 
    }, [originalList,filteredlistofRes]);
};
export default useListofRes;