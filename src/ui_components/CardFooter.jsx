import React from 'react'
import pic from '../images/profile.jpg'

function CardFooter() {
  return (
    <div className='flex items-center gap-4'>
        <span className='flex items-center gap-2'>
            <div className='w-[40px] h-[40px] rounded-full overflow-hidden'>
                <img 
                src={pic} 
                alt="" 
                className='rounded-full w-full h-full object-cover'
                />


            </div>
            <small className='text-gray-400 text-[12px]  font-semibold'>
                John Doe
            </small>
            <small className='text-gray-400 text-[12px]  font-semibold ml-3'>
                12 November, 2026
            </small>

        </span>

    </div>
  )
}

export default CardFooter