import { createSlice } from "@reduxjs/toolkit";
import { mock, mockCarousel } from "../mockData";
const mainPageSlice = createSlice(
    {
        name: "ResAndCarousel",
        initialState: 
        {
            restaurants: mock,
            carousels:mockCarousel,
        },
        reducers: {
            addResItems : (state,action) => {
                state.restaurants=action.payload;
            },
            addCarouselItems : (state,action) => {
                state.carousels=action.payload;
            }
        }
    }
)
export const {addCarouselItems,addResItems} = mainPageSlice.actions;
export default mainPageSlice.reducer;