import React, { useEffect, useState } from 'react'
import ItineraryCard from './ItineraryCard'
import { useDispatch,useSelector } from 'react-redux'
import { getItinerariesAction } from '../redux/actions/itineraryActions'

const Itineraries = ({ idCity = "" }) => {


	const itineraries = useSelector(store => store.itinerary.itineraries)
	const dispatch = useDispatch()
	useEffect(() => {
		if(idCity!= "") dispatch(getItinerariesAction(idCity))
	}, [idCity])

	return (
		<div className='flex flex-col md:flex-row wrap justify-around'>
			{itineraries.length>0?itineraries.map((itinerary, key) => {
				return (<ItineraryCard key={key} itinerary={itinerary} />)
			}):<div className='py-5 px-auto text-4xl text-black'>No itineraries found for this city</div>}
		</div>
	)
}

export default Itineraries