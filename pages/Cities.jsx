import React from 'react'
import HeaderComponent from '../layouts/HeaderComponent'
import CitiesMain from '../components/CitiesMain'
import FooterComponent from '../layouts/FooterComponent'
import CitiesBG from '../assets/images/bgCities.jpg'

const Cities = () => {
  return (
    <div className='flex flex-column w-full min-h-screen bg-cover justify-center flex-wrap' style={{backgroundImage: `url(${CitiesBG})`}}>
      <HeaderComponent text="white" />
      <CitiesMain />
      <FooterComponent text="white" />
    </div>
  )
}
export default Cities