import React from 'react'
import banner from '../images/header.png'

function Header() {
  return (
    <section className='max-container section-padding py-20'>
        <div className='w-full h-[200px] lg:h-[400px] overflow-hidden rounded-lg px-4'>
            <img 
            src={banner} 
            alt="" 
            className='w-full h-full object-cover lg:object-fill rounded-lg'
            />

        </div>

    </section>
  )
}

export default Header