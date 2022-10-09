import {combineReducers, configureStore} from "@reduxjs/toolkit";

import {userReducer} from "./Slices/UserSlice/UserSlice";

const mainReducer = combineReducers({
    userReducer
})

const storeSetup = () => configureStore({
   reducer: mainReducer
});

export {storeSetup};