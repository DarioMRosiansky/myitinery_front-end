import { createAsyncThunk } from "@reduxjs/toolkit";
import { server } from "../../utils/axios";

export const getItinerariesAction = createAsyncThunk('getItineraries',async(idCity)=>{
    try {
        const data =  await server.get(`/itineraries/city/${idCity}`)
        console.log("data",data.data.response)
        return  data.data.response
    } catch (error) {
        console.log(error);
        return []
    }
})

export default {
    getItinerariesAction
}