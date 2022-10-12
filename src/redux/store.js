import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {userReducer} from "./Slices/UserSlice/UserSlice";
import {carReducer} from "./Slices/CarSlice/CarSlice";

const mainReducer = combineReducers({
    userReducer,
    carReducer
})

const storeSetup = () => configureStore({
   reducer: mainReducer
});

export {storeSetup};