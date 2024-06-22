import  { useEffect } from 'react'
import { CAROUSEL_ITEM_API } from '../utils/constants'
import { useDispatch } from 'react-redux';
import { addCarouselMenu } from '../utils/redux/menuSlice';

const useCarouselMenu = async (carId) => {
    const dispatch = useDispatch();
    
        useEffect( async ()=> {
            try{
            const data = await fetch(CAROUSEL_ITEM_API+carId+"&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
            const json = await data.json();
            const menu = json?.data;
            dispatch(addCarouselMenu(menu));
            }
            catch(error)
            {
                console.error("Error fetching carousel menu:", error);
            }
    }, [carId]);
    };

export default useCarouselMenu;