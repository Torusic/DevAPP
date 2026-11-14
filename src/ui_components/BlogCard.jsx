import React from 'react'
import Badge from './Badge'
import CardFooter from './CardFooter'
import thumbnail from '../images/rent.png'

function BlogCard() {
  return (
    <div className='px-3 py-3 rounded-md w-[300px] h-auto flex flex-col gap-4 dark:border-gray-800 shadow'>
        <div className='w-full h-[200px] border rounded-md overflow-hidden'>
            <img 
            src={thumbnail} 
            alt=""
            className='h-full w-full object-cover rounded-lg'
            />

        </div>
        <Badge/>

        <h3 className='font-semibild leading-normal text-slate-800 mb-0 dark:text-white'>Buld an  Ecommerce platform with React and Django Rest Framework</h3>
        <CardFooter/>
    </div>
  )
}

export default BlogCard