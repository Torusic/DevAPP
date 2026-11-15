import React from 'react'
import './index.css'
import { Button } from "@/components/ui/button"
import Navbar from './ui_components/Navbar'

import BlogCard from './ui_components/BlogCard'
import Bar from './ui_components/Bar'
import BottomBar from './ui_components/BottomBar'

function App() {
  return (
   <>
   <Navbar/>
   <Bar/>
   <BottomBar/>
   </>
    
  )
}

export default App