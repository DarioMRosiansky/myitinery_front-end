import { createReducer } from "@reduxjs/toolkit";
import { getCitiesAction , getBackupCitiesAction, filterCitiesAction,getCitiesIdAction } from '../actions/cityActions'
const initialState = {
    cities : [],
    backupCities: [],
    city: {}
}

export const cityReducer = createReducer(initialState, (builder)=>{
    builder
    .addCase(getCitiesAction.fulfilled, (store,action)=>{
        const newState = { ...store , cities: action.payload}
        return newState
    })
    .addCase(getCitiesAction.rejected, (store,action)=>{
        const newState = {...store,cities: action.payload}
        return newState
    })
    .addCase(getBackupCitiesAction.fulfilled,(store,action)=>{
        const newState = { ...store , backupCities: action.payload}
        return newState
    })
    .addCase(getBackupCitiesAction.rejected, (store,action)=>{
        const newState = {...store,cities: action.payload}
        return newState
    })
    .addCase(filterCitiesAction, (store,action)=>{
        let filtered = [];
        if(action.payload.length>=0){
            filtered = store.backupCities.filter((data)=>{
            return (data.city.toLowerCase().startsWith(action.payload.toLowerCase())||data.country.toLowerCase().startsWith(action.payload.toLowerCase()))
        })
        }
        return {...store, cities : filtered}
    })
    .addCase(getCitiesIdAction.fulfilled,(store,action)=>{
        return {...store, city : action.payload}
    })
    .addCase(getCitiesIdAction.rejected,(store,action)=>{
        return {...store, city : action.payload}
    })
})

export default cityReducer