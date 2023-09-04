import React, { useEffect, useState } from 'react'
import ItineraryCard from './ItineraryCard'
import axios from 'axios'
const itineraryURL = "http://localhost:8081/api/itineraries"

const Itineraries = ({ idCity = "" }) => {

	const [itineraries, setItineraries] = useState([])

	useEffect(() => {
		axios(`${itineraryURL}/city/${idCity}`).then((res) => {
			setItineraries(res.data.response)
		})
	}, [idCity])

	return (
		<div className='flex flex-row wrap justify-around'>
			{console.log(itineraries)}
			{itineraries.map((itinerary, key) => {
				return (<ItineraryCard key={key} itinerary={itinerary} />)
			})}
		</div>
	)
}

export default Itineraries