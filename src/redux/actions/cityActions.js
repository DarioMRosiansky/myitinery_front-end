import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { server } from "../../utils/axios";


export const getCitiesAction = createAsyncThunk('getCities', async( )=>{
    try {
        const data =  await server.get('/cities')
        console.log("data",data.data.cities)
        return  data.data.cities
    } catch (error) {
        console.log(error);
        return []
    }
})

export const getBackupCitiesAction = createAsyncThunk('getBackupCities', async( )=>{
    try {
        const data =  await server.get('/cities')
        console.log("data",data.data.cities)
        return  data.data.cities
    } catch (error) {
        console.log(error);
        return []
    }
})

export const  filterCitiesAction = createAction('FilterCities', (event)=>{
    return {
        payload: event
    }
})

export default { 
    getCitiesAction,
    getBackupCitiesAction,
    filterCitiesAction
}