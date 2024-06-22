import { createSlice } from "@reduxjs/toolkit"

const menuSlice = createSlice(
    {
        name: "ResCarouselMenu",
        initialState: 
        {
            ResItems: [],
            CarouselItems: [],
        },
        reducers: {
            addMenuItems : (state,action) => {
                state.ResItems=action.payload;
            },
            addCarouselMenu : (state,action) => {
                state.CarouselItems = action.payload;
            }
        }
    }
)
export const {addMenuItems,addCarouselMenu} = menuSlice.actions;
export default menuSlice.reducer;