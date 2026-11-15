import React from 'react'
import Header from './Header'
import SideBar from './SideBar'
import { Outlet } from 'react-router-dom'


function Bar() {
  return (
    <div className='flex mt-25  '>
        <div className='flex-1 hidden lg:block '>
            <SideBar/>
        </div>
        <div className=' flex-4'>
          <Outlet/>
        </div>

    </div>
  )
}

export default Bar