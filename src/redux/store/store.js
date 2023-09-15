import { configureStore } from "@reduxjs/toolkit";
import { cityReducer } from "../reducers/cityReducers"
import { itineraryReducer } from "../reducers/itineraryReducers"
import { userReducers } from "../reducers/userReducers";


export const store = configureStore({
    reducer: {
        city: cityReducer,
        itinerary: itineraryReducer,
        user: userReducers
    }
})