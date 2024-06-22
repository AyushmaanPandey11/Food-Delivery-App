import { configureStore } from "@reduxjs/toolkit"; 
import cartReducer from "./cartSlice";
import ResMenuReducer from "./menuSlice";
import ResAndCarouselReducer from "./mainPageSlice";
const appStore = configureStore({
    reducer:{
        cart : cartReducer,
        ResCarouselMenu : ResMenuReducer,
        ResAndCarousel: ResAndCarouselReducer,
    },
});
export default appStore;