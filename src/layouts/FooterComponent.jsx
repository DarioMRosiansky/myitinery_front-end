import React from 'react'
import { NavLink as Anchor } from 'react-router-dom'

const FooterComponent = ({ text, bg }) => {
  return (
    <div className={`flex flex-row justify-around w-full h-[10vh] overflow-hidden text-${text}`}>
       <nav>
        <ul className='flex flex-row justify-start gap-1 m:gap-10 py-5'>
        <li className='inline'><Anchor to="/" className={`mr-4 p-2 font-["Segoe UI"] font-bold text-base text-${text}`}>Home</Anchor></li>
        <li className='inline'><Anchor to="/cities" className={`mr-4 font-["Segoe UI"] font-bold text-base text-${text}`}>Cities</Anchor></li>
        </ul>
      </nav>
      <div>
        <ul className='flex flex-row justify-start gap-1 m:gap-10 py-5'>
          <li >Dario Rosiansky</li>
          <li >2023</li>
        </ul>
      </div>
     
    </div>
  )
}

export default FooterComponent