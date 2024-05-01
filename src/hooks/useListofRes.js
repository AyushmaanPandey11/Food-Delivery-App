import { SWIGGY_API } from "../utils/constants";
import {  useEffect } from "react";
import { useDispatch } from "react-redux";
import { addResItems } from "../utils/redux/mainPageSlice";
const useListofRes = () => {
    const dispatch = useDispatch();
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
    }, []);
};
export default useListofRes;