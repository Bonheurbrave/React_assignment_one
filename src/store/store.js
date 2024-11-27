import { configureStore } from "@reduxjs/toolkit";
import PageSlice from '../store/pageSlice'
const store = configureStore({
    reducer:{
        page:PageSlice
    }
})


export default store