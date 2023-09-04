import React, { useEffect, useState  } from 'react'
import { Input } from '@material-tailwind/react'
import { HorizontalCard } from './HorizontalCard'

import { useDispatch,useSelector} from "react-redux"
import { getCitiesAction , getBackupCitiesAction, filterCitiesAction} from '../redux/actions/cityActions'


export const CitiesMain = () => {

  //const store = useSelector(store=> store)
  //console.log(store);

  const dispatch = useDispatch()
  const cities = useSelector(store => store.city.cities)
  const backupCities = useSelector(store => store.city.backupCities)
  //const [cities, setCities] = useState([])
 // const [backupCities,setBackupCities]= useState([])

   const filterCities = (value) =>{
    dispatch(filterCitiesAction(value))
   /*backupCities.filter((data)=>{
      return (data.city.toLowerCase().trim().startsWith(value.toLowerCase().trim())||data.country.toLowerCase().trim().startsWith(value.toLowerCase().trim()))
    })*/
  }
  const handleChange = event =>{
     filterCities(event.target.value)
  } 
  
  useEffect(() => {
    dispatch(getCitiesAction())
    dispatch(getBackupCitiesAction())
  }, []) 


  return (
    <div className=' min-h-[70vh] w-full'>
      <div className='w-full md:w-4/5 mx-auto mt-10'>
        <Input color='blue' className='text-white' label='Search city...' onChange={handleChange} />
      </div>
      <h3 className='text-white text-center mt-16 font-bold text-4xl'></h3>
      <div className='flex flex-col md:flex-row flex-wrap md:justify-center my-5'>
        {cities.map((city) => <HorizontalCard key={city.city}cityName={city.city} photo={city.photo} country={city.country} description={city.smalldescription} id={city._id} />)}
         {console.log("backupCities" , backupCities)} 
       </div>
      
    </div>
  )
}

export default CitiesMain