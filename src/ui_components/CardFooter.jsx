import React from 'react'
import pic from '../images/profile.jpg'

function CardFooter({ author = 'John Doe', date = '12 Nov, 2026' }) {
  return (
    <div className='flex items-center gap-2.5 text-xs   font-medium text-gray-500 dark:text-gray-400'>
      <div className='w-8 h-8 rounded-full overflow-hidden ring-2 ring-white dark:ring-gray-900 shadow-sm shrink-0'>
        <img
          src={pic}
          alt={author}
          className='w-full h-full object-cover'
        />
      </div>

      <span className='text-gray-700 dark:text-gray-300 truncate'>
        {author}
      </span>

      <span className='w-1 h-1 rounded-full bg-gray-300 dark:bg-gray-600 shrink-0' />

      <time className='text-gray-400 dark:text-gray-500 whitespace-nowrap'>
        {date}
      </time>
    </div>
  )
}

export default CardFooter