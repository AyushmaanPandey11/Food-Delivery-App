import { createSlice } from "@reduxjs/toolkit"

const menuSlice = createSlice(
    {
        name: "ResMenu",
        initialState: 
        {
            items: [],
        },
        reducers: {
            addMenuItems : (state,action) => {
                state.items=action.payload;
            }
        }
    }
)
export const {addMenuItems} = menuSlice.actions;
export default menuSlice.reducer;