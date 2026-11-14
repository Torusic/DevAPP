import React from 'react'

function Badge({ label = 'Frontend' }) {
  return (
    <span className='inline-flex items-center gap-1.5 self-start px-2.5 py-1 text-[11px] font-medium tracking-wide uppercase rounded-full bg-indigo-50 text-indigo-600 ring-1 ring-inset ring-indigo-200 dark:bg-indigo-500/10 dark:text-indigo-400 dark:ring-indigo-500/30'>
      <span className='w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400' />
      {label}
    </span>
  )
}

export default Badge