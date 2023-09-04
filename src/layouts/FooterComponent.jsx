import React from 'react'
import { NavLink as Anchor } from 'react-router-dom'

const FooterComponent = ({ text,bg }) => {
  return (
    <div className={`flex flex-row justify-around w-full h-[10vh] overflow-hidden text-${text}`}>
      <nav>
        <ul className='flex flex-row justify-start gap-1 m:gap-10 pb-5'>
          <li className='inline'><Anchor to="/" className={`mr-8 p-2 font-["Segoe UI"] font-bold text-base text-${text}`}><svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 p-0 m-0">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
          </svg>
          </Anchor></li>
          <li className='inline'><Anchor to="/cities" className={`mr-8 p-2 font-["Segoe UI"]  font-bold text-base text-${text}`}><svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 p-0 m-0">
  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
</svg>
</Anchor></li>
        </ul>
      </nav>
      <div>
        <ul className='flex flex-row justify-start gap-1 m:gap-10 py-5'>
          <li>My Tinerary</li>
          <li >Dario Camacho</li>
          <li >2023</li>
        </ul>
      </div>

    </div>
  )
}
export default FooterComponent