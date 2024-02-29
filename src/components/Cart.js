import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
const Cart = () => {
    const cartItems = useSelector((store)=> store.cart.items); 
    console.log(cartItems);
    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart())
    }
    return (
        <div>
            <h1 className="m-2 p-4 text-center text-2xl font-bold">Cart</h1>
            <div className=" m-auto">
                <button className="bg-black text-white rounded-md self-center  ml-[47.5%] p-4 " onClick={ () => handleClearCart()} >
                    Clear items
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