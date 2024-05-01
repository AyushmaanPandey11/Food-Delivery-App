import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart,removeItems } from "../utils/redux/cartSlice";
const Cart = () => {
    const cartItems = useSelector((store)=> store.cart.items); 
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart())
    }
    const handleRemoveCart = () => {
        dispatch(removeItems());
    }
    return (
        <div >
            <h1 className="m-2 p-4 text-center text-2xl font-bold">Cart</h1>
            <div className="flex-wrap flex-row " >
                <button className="bg-black my-5 text-white rounded-md self-center w-36 ml-[46.5%] p-4  " onClick={ () => handleClearCart()} >
                    Clear items
                </button>
                <button className="bg-black text-white rounded-md self-center w-36 ml-[46.5%] p-4 " onClick={ () => handleRemoveCart()} >
                    Remove item
                </button>
            </div>
            { cartItems.length === 0 && <h1 className="m-2 p-4 text-center text-2xl font-bold" > Add to Cart </h1>  }
            <div className="w-6/12  shadow-md m-auto " >
             <ItemList  items={cartItems} />
            </div>
        </div>
        
    )
};
export default Cart;    