import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { authReducer } from "./authReducer";




//store
export const store = configureStore({
    reducer: authReducer
});