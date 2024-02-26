import ItemList from "./ItemList";
import { useState } from "react";
const RestaurantCategory = ({data, showItems, setShowIndex}) => {
    
    const handlelclick = () => {
        setShowIndex();
    }
    return (
        <div className="flex justify-between" onClick={handlelclick}>
            <div className="bg-gray-100 w-6/12 shadow-lg mx-auto my-4 p-4 hover:cursor-pointer">
                <div className="justify-between flex" >
                    <span className="font-bold text-lg">{data.title} ({data.itemCards.length})</span>
                    <span>{showItems ? "🔼" : "🔽"}</span>
                </div>
                { showItems && <ItemList items = {data?.itemCards} /> }
            </div>
            
        </div>
    );
}
export default RestaurantCategory;