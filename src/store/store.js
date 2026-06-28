import { configureStore } from "@reduxjs/toolkit";
import CProfileReducer from "./CProfileSlice"
const store = configureStore({
    reducer:CProfileReducer
})

export default store