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
        <div className='relative w-full h-[250px] lg:h-[400px] overflow-hidden rounded-lg px-4 '>
          {images.map((img,index)=>(
            <img 
            key={index}
            src={img} 
            alt={`Devfolio banner ${index+1}`}
            loading={index === 0 ? 'eager' : 'lazy'}
            className={`absolute inset-0 w-full px-3 py-3 h-full object-cover lg:object-fill rounded-2xl transition-opacity duration-1000 ${
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