import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./slice";

const store = configureStore({
    reducer : {
        Inf : UserReducer.reducer
    }
})

export default store;