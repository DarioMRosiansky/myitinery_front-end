import { useDispatch,useSelector } from 'react-redux'
import { getItinerariesAction } from '../redux/actions/itineraryActions'

import React, { useEffect, useState } from 'react'
import ItineraryCard from './ItineraryCard'
import axios from 'axios'
const itineraryURL = "http://localhost:3000/api/itineraries"

const Itineraries = ({ idCity = "" }) => {

	const itineraries = useSelector(store => store.itinerary.itineraries)
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(getItinerariesAction(idCity))
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