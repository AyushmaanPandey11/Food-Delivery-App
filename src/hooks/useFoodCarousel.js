import { useEffect } from "react";
import { SWIGGY_API } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addCarouselItems } from "../utils/redux/mainPageSlice";
const useFoodCarousel = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data =  await fetch(SWIGGY_API);
                const json = await data.json();
                const carousels=json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info;
                dispatch(addCarouselItems(carousels));
            } catch (error) {
                
                console.error("Error fetching data:", error);
            }
        };
        fetchData(); 
    }, []);
};
export default useFoodCarousel;