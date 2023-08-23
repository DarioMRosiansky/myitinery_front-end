import React, { useEffect, useState } from "react";
import axios from "axios";
const ApiURL = 'http://localhost:8081/api'
import DetailsCard from "./DetailsCard";
import { useParams } from "react-router-dom";

export function DetailsComponent() {
    let {id} = useParams()
    const [city, setCity] = useState({})
    useEffect(() => {
       axios.get(`${ApiURL}/${id}`).then((response)=>{
            setCity(response.data.response)
       })
    },[])

    

    return (
        <div className="min-h-[70vh]">
            <DetailsCard detailsCity={city}/>
        </div>
        
    );
}