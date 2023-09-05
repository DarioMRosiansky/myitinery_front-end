import React, { useEffect, useState } from "react";
import axios from "axios";
const ApiURL = 'http://localhost:3000/api/cities'
import DetailsCard from "./DetailsCard";
import { useParams } from "react-router-dom";

export function DetailsComponent() {
    let {id} = useParams()
    const [city, setCity] = useState({})
    useEffect(() => {
       axios.get(`${ApiURL}/${id}`).then((response)=>{
        console.log(response.data.response)
            setCity(response.data.response)
       })
    },[])

    

    return (
        <div className="min-h-[70vh]">
            <DetailsCard detailsCity={city}/>
        </div>
        
    );
}