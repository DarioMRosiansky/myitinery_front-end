import React from 'react'


export const Slide = ({  cities }) => {
  return (
    <>
        {
          cities.map((city)=>{
            return  (
              <div className='relative' >
              <img className='mb-2 md:h-36 h-full object-cover' title={city.smalldescription} src={city.photo} ></img>
              <p className='absolute top-1 left-1 md:bottom-5 md:left-5' style={{ textShadow: "#000 0px 0 2px,#fff 1px 0 15px" }}>{city.city}</p>
            </div>
            )
          })
        }
    </>
  )
}
