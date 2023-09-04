import { createReducer } from "@reduxjs/toolkit";
import { getCitiesAction , getBackupCitiesAction, filterCitiesAction } from '../actions/cityActions'
const initialState = {
    cities : [],
    backupCities: [],
}

export const cityReducer = createReducer(initialState, (builder)=>{
    builder
    .addCase(getCitiesAction.fulfilled, (store,action)=>{
        console.log('fulfilled');
        console.log(action);
        const newState = { ...store , cities: action.payload}
        return newState
    })
    .addCase(getCitiesAction.rejected, (store,action)=>{
        console.log('rejected');
        const newState = {...store,cities: action.payload}
        return newState
    })
    .addCase(getBackupCitiesAction.fulfilled,(store,action)=>{
        console.log('backup fulfilled');
        console.log(action);
        const newState = { ...store , backupCities: action.payload}
        return newState
    })
    .addCase(getBackupCitiesAction.rejected, (store,action)=>{
        console.log('rejected');
        const newState = {...store,cities: action.payload}
        return newState
    })
    .addCase(filterCitiesAction, (store,action)=>{
        console.log('action', action.payload);
        let filtered = [];
        if(action.payload.length>=0){
            filtered = store.backupCities.filter((data)=>{
            return (data.city.toLowerCase().startsWith(action.payload.toLowerCase())||data.country.toLowerCase().startsWith(action.payload.toLowerCase()))
        })
        }
        return {...store, cities : filtered}
    })
})

export default cityReducer