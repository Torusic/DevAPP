import React from 'react'
import './index.css'
import { Button } from "@/components/ui/button"
import Navbar from './ui_components/Navbar'
import Header from './ui_components/Header'
import BlogCard from './ui_components/BlogCard'

function App() {
  return (
   <>
   <Navbar/>
   <Header/>
   <BlogCard/>
   </>
    
  )
}

export default App