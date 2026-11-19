import { Button } from "@/components/ui/button"
import React, { useState } from 'react'
import { FaArrowCircleRight, FaHamburger, FaSearch } from "react-icons/fa"
import { IoClose } from "react-icons/io5"
import { Switch } from "@/components/ui/switch"
import ResponsiveNavbar from "./ResponsiveNavbar"
import { CiSearch } from "react-icons/ci";


function Navbar() {
    const[activeSection, setActiveSection]=useState(false)
    const[isOpen,setIsOpen]=useState(false)
    const[showNavbar, setShowNavbar]=useState(false)
    const[showSearch,setShowSearch]=useState(false)
   const navLinks=[
        {name:'Login', href:'#login'},
        {name:'logout', href:'#logout'},
        

    ]
  return (
    <>
    <nav className='fixed z-50 top-0 mb-6 bg-white backdrop-blur-3xl justify-between p-3 md:px-6 items-center right-0 left-0  flex gap-6'>
        <a href="/" className='relative text-2xl flex gap-2 items-center justify-center text-gradient font-bold text-blue-500'>Devfolio

       <div className="relative bg-blue-500 rounded-full flex items-center justify-center w-2 h-2">
    <span className="absolute bg-blue-200/75 rounded-full animate-pulse w-4 h-4 rounded-full"></span>
</div>
        </a>
        <div className='lg:flex hidden  justify-between items-center p-3 gap-4 text-gradient'>
          <FaSearch size={20} className="text-blue-400 cursor-pointer" />
            {navLinks.map((link)=>{
                const isActive=activeSection===link.href.slice(1)
                return(
                    <a 
                    key={link.name}
                    href={link.href}
                    onClick={()=>setActiveSection(link.href.slice(1))}
                    className={`relative rounded-lg py-2  text-gradient font-semibold ${ isActive ? ' text-emerald-950 text-gradient': 'text-slate-600  hover:text-emerald-800 text-gradient'}`}
                    >
                        {link.name}
                    <span
                      className={`absolute bottom-0 left-0 right-0 h-[3px] origin-center rounded-full bg-emerald-500 transition-transform duration-200  ${
                        isActive ? 'scale-x-100' : 'scale-x-0'
                      }`}
                    />

                    </a>

                )

            }) }
            

            <Button className="mt-2 bg-blue-500
      hover:bg-emerald-600 text-white">Create Post</Button>
      <Switch />
      

        </div>
        
        
        <Switch className="lg:hidden" />
        <FaSearch onClick={()=>setShowSearch(search=>!search)} size={20} className="text-blue-400 lg:hidden cursor-pointer" />
        

        



        <button 
        type="button"
        onClick={()=>setIsOpen((previous)=>!previous)}
        className="lg:hidden"
        >
            {isOpen ?<IoClose className="text-green-600 cursor-pointer" size={18} /> 
            : <FaHamburger
            onClick={()=>setShowNavbar(curr=>!curr)}
             className="text-blue-600 cursor-pointer" size={18} />}
            
        </button>
        

{isOpen && (
  <div className="absolute top-full z-1001 left-0 right-0 mx-1 rounded-b-lg border-2 border-b-blue-300
    lg:hidden grid gap-2 p-5
    bg-white/95 border-t shadow-xl">

    {navLinks.map((link) => {
      const isActive = activeSection === link.href.slice(1)

      return (
        <a
          key={link.name}
          href={link.href}
          onClick={() => {
            setActiveSection(link.href.slice(1))
            setIsOpen(false)
          }}
          className={`rounded-lg px-4 py-3 text-sm font-semibold
            transition-all duration-200
            ${
              isActive
                ? 'bg-blue-100 text-emerald-950 text-gradient'
                : 'text-slate-600 hover:bg-blue-50 hover:text-blue-800 text-gradient'
            }`}
        >
          {link.name}
        </a>
      )
    })}

    <Button className="w-full mt-2 bg-blue-500
      hover:bg-blue-600 text-white">
      Create Post
    </Button>

  </div>
)}

{showSearch && (
  <div className="absolute lg:hidden  bg-white backdrop-blur-3xl p-2 border border-b-blue-300  top-full mx-2 my-1 left-0 right-0 rounded-lg ">
    <div className=" flex px-2">
      <input type="text"
      placeholder="Search developers, opportunities and others"
       className="w-full  outline-none text-xs p-1" />
       <FaArrowCircleRight size={20} className="text-blue-500 hover:text-blue-600"/>
    </div>

  </div>
)
}


        
        

    </nav>
   {/** {
      showNavbar &&
      <ResponsiveNavbar/>

    } */}
    

    </>
  )
}

export default Navbar