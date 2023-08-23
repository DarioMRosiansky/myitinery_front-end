import React from 'react'
import HeaderComponent from '../layouts/HeaderComponent'
import FooterComponent from '../layouts/FooterComponent'
import { DetailsComponent } from '../components/DetailsComponent'
import DetailsBG from '../assets/images/bgDetails.jpg'

const Details = () => {
  return (
    <div className='flex flex-column w-full min-h-screen bg-cover justify-center flex-wrap' style={{backgroundImage: `url(${DetailsBG})`}}>
      <HeaderComponent text="white"/>
      <DetailsComponent />
      <FooterComponent text="white"/>
    </div>
  )
}

export default Details