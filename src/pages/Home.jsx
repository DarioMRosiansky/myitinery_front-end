import React from 'react'

import HomeMain from '../components/HomeMain'
import HeaderComponent from '../layouts/HeaderComponent'
import Background from '../assets/images/bg6.jpg'
import FooterComponent from '../layouts/FooterComponent'


export default function Home() {/*<HeaderComponent color="white"/>*/
  return (
    <div className='w-full min-h-screen bg-cover flex flex-col  justify-between' style={{backgroundImage: `url(${Background})`}} >
      <HeaderComponent text="white"/>
      <HomeMain />
      <FooterComponent text="white" bg="black"/>
    </div>
  )
 
   
      
   
  
}
