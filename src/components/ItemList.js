import { ITEM_URL } from "../utils/constants";
const ItemList = ({items}) => {
    return (
        <div > 
            { items.map( (item) => (
                <div key = { item.card.info.id } className="m-2 p-2 text-left flex border-gray-200 border-b-4 justify-between">
                    <div className="w-8/12  " >
                        <div className="py-2 solid font-bold">
                            <span> {item.card.info.name} </span>
                            <span>- ₹ {item.card.info.price? item.card.info.price/100:item.card.info.defaultPrice/100}</span>
                        </div>
                        <p className="text-s">{item.card.info.description}</p>
                    </div>
                    <div className="w-3/12 p-4">
                        <div className="absolute">
                        <button className=" bg-black text-white my-1 item-center p-2 rounded-lg border-b mx-16">Add +
                        </button>
                        </div>
                        <img src ={ITEM_URL + item.card.info.imageId}  className="w-full h-[120px]"/>
                    </div>
                </div>
            ) ) }      
        </div>
    );
};
export default ItemList;