import React, { useEffect, useState } from 'react'
import banner from '../images/header.png'
import banner2 from '../images/header2.png'

function Header() {
  const images= [banner,banner2]
  const [currentImage,setCurrentImage]=useState(0)

  useEffect(()=>{
    const interval=setInterval(()=>{
      setCurrentImage((prev)=>(prev+1) % images.length)
    },5000)
    return()=>clearInterval(interval)

  },[images.length])
  return (
    <section className='max-container section-padding py-20'>
    <p className='text-center text-lg lg:text-xl text-gray-600  mb-3 max-w-xl mx-1'>
    <span className='font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent'>
      Welcome to Devfolio
    </span>{' '}
    — your developer identity, all in one place.
  </p>
        <div className='relative  w-full h-[220px] lg:h-[400px] overflow-hidden rounded-xl px-4'>
          {images.map((img,index)=>(
            <img 
            key={index}
            src={img} 
            alt={`Devfolio banner ${index+1}`}
            loading={index === 0 ? 'eager' : 'lazy'}
            className={`absolute inset-0 w-full  px-3 py-2 h-full object-cover lg:object-fill rounded-2xl transition-opacity duration-1000 ${
              currentImage === index
                ? 'opacity-100'
                : 'opacity-0'
            }`}
            />

          ))

          }


        </div>

    </section>
  )
}

export default Header