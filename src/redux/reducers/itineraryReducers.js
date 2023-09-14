import { createReducer } from "@reduxjs/toolkit";
import { getItinerariesAction } from "../actions/itineraryActions";


const initialState = {
    itineraries : []
}

export const itineraryReducer = createReducer(initialState, (builder)=>{
    builder
    .addCase(getItinerariesAction.fulfilled,(store,action)=>{
        const newState = { ...store , itineraries: action.payload}
        return newState
    })
    .addCase(getItinerariesAction.rejected,(store,action)=>{
        const newState = { ...store , itineraries: action.payload}
        return newState
    })
})

export default itineraryReducer