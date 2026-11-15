import React from 'react'
import './index.css'
import { Button } from "@/components/ui/button"
import Navbar from './ui_components/Navbar'

import BlogCard from './ui_components/BlogCard'
import Bar from './ui_components/Bar'
import BottomBar from './ui_components/BottomBar'
import { Outlet } from 'react-router-dom'
import SideBar from './ui_components/SideBar'

function App() {
  return (
   <>
   <Navbar/>
   
   <main className='h-full'>
   <Outlet/>
   </main>
   <BottomBar/>
   </>
    
  )
}

export default App