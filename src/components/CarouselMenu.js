import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useCarouselMenu from '../hooks/useCarouselMenu';
import { useSelector } from 'react-redux';
import Shimmer from "./Shimmer";
import Restaurantcard, { WithQuickDelivery } from './Restaurantcard';
import { CDN_URL } from '../utils/constants';

const CarouselMenu = () => {
    const { carId } = useParams();
    const carInfo = useSelector((store) => store?.ResCarouselMenu?.CarouselItems);
    useCarouselMenu(carId);

    if (!carInfo || carInfo.length === 0) return <Shimmer />;

    const { title, description, imageId } = carInfo?.cards[0]?.card?.card;
    const restaurants = carInfo?.cards.filter(
        (c) => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.Restaurant"
    );
    const count = restaurants.length;
    const QuickDelRestaurant = WithQuickDelivery(Restaurantcard);

    return (
        <div className="text-left mt-[90px] ml-[100px]">
            <div className='flex justify-between items-center'>
                <div className='flex flex-col max-w-2xl'>
                    <h1 className="font-bold text-7xl">{title}</h1>
                    <p className="my-4 text-lg font-bold text-gray-700">{description}</p>
                </div>
                <img className='rounded-md w-1/3 h-auto hover:animate-pulse mr-24' src={CDN_URL + imageId} alt='Item Image' />
            </div>
            <h1 className="font-bold text-4xl text-black mt-8">Restaurants to Explore ({count})</h1>
            <div className="flex flex-wrap justify-center mt-4 -ml-24">
                {
                    carInfo && restaurants.map((restaurant) => (
                        <Link key={restaurant?.info?.id} to={"/restaurants/" + restaurant?.card?.card?.info?.id}>
                            {restaurant?.info?.sla?.deliveryTime <= 35 ? 
                                <QuickDelRestaurant resdata={restaurant?.card?.card} /> : 
                                <Restaurantcard resdata={restaurant?.card?.card} />}
                        </Link>
                    ))
                }
            </div>
        </div>
    );
}

export default CarouselMenu;
