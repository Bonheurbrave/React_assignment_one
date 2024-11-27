import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    page:1
}
const PageSlice =  createSlice({
    name:"page",
    initialState,
    reducers:{
        nextpage :(state)=>{state.page++},
        prevpage :(state)=>{state.page --},
    }
})

export const {nextpage , prevpage} = PageSlice.actions;
export default PageSlice.reducer;