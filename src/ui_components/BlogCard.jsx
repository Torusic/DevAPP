import React from 'react'
import Badge from './Badge'
import CardFooter from './CardFooter'
import thumbnail from '../images/rent.png'

function BlogCard() {
  return (
    <article className='group relative flex flex-col  ml-5 '>
    <p className='text-2xl text-gradient font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent p-2'>Blogs</p>
    <div className='w-[320px] mb-5 rounded-xl flex flex-col overflow-hidden bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-out'>
      {/* Thumbnail */}
      <div className='relative w-full h-[200px] items-center justify-center flex overflow-hidden '>
        <img
          src={thumbnail}
          alt="Blog thumbnail"
          loading="lazy"
          className='h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105'
        />
        {/* subtle gradient overlay */}
        <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
      </div>

      {/* Content */}
      <div className='flex flex-col gap-3 p-5'>
        <Badge />

        <h3 className='text-base font-semibold leading-snug tracking-tight text-slate-800 dark:text-slate-100 line-clamp-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors'>
          Build an Ecommerce platform with React and Django Rest Framework
        </h3>

        <div className='mt-auto pt-2 border-t border-gray-100 dark:border-gray-800'>
          <CardFooter className='m-4' />
        </div>
      </div>
    </div>
      
    </article>
  )
}

export default BlogCard