import React from 'react'
import { NavLink as Anchor } from 'react-router-dom'

export const Nav = ({navColor}) => {
  return (
    <nav className='flex flex-row justify-between flex-nowrap  '>
      <ul>
        <li className='inline'><Anchor to="/" className={`mr-4 p-2 font-["Segoe UI"] font-bold text-base text-${navColor}`}>Home</Anchor></li>
        <li className='inline'><Anchor to="/cities" className={`mr-4 font-["Segoe UI"] font-bold text-base text-${navColor}`}>Cities</Anchor></li>
        <li className='inline-block'><button className='font-["Segoe UI"]  text-base flex flex-row justify-around gap-1 bg-[#4f46e5] hover:bg-[#2D23DF] text-white font-bold py-2 px-7 rounded'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
          </svg>
          Login
        </button></li>
      </ul>
    </nav>
  )
}
