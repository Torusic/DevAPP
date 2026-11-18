import React, { useState } from 'react'
import { CgProfile } from 'react-icons/cg'
import { FaBookmark, FaBriefcase } from 'react-icons/fa'
import { HiUserGroup } from 'react-icons/hi'
import { IoMdAddCircleOutline, IoMdHome } from 'react-icons/io'
import { Link } from 'react-router-dom'

function BottomBar() {

    const[active,setActive]=useState('/home')
    const sidelinks=[
        {name:'Home',href:'/home',icon:<IoMdHome size={20} />},
        {name:'Opportunities',href:'/opportunities',icon:<FaBriefcase />},
        {name:'create',href:'/create',icon:<IoMdAddCircleOutline size={35} />},
        {name:'Developers',href:'/developers',icon:<HiUserGroup />},
        {name:'Profile',href:'/profile',icon:<CgProfile />}
    ]
  return (
    <section className='md:px-4 px-2 md:py-1   h-full lg:hidden flex justify-between items-center sticky  z-100 bottom-0 bg-white/60 backdrop-blur-md right-0 left-0  rounded-xl  border-2'>
        <div className='flex justify-between items-center  p-2 w-[350px] md:w-full'>
            {sidelinks.map((side)=>{
                const isActive=active===side.name

                return(
                    <div  className=' w-full flex items-center justify-between' >
                    <Link 
                    key={side.name}
                    to={side.href}
                    onClick={()=>setActive(side.name)}
                    className={`  flex items-center justify-between   px-2 space-x-2 rounded-xs ${isActive ?"bg-violet-100 rounded-full":"hover:bg-violet-50 cursor-pointer "}`}>
                        <p className='p-2 text-violet-600 '>{side.icon}</p>
                        {/**<p className='p-2 font-semibold text-xs bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent  '>{side.name}</p>*/}

                    </Link>

                    </div>
                    
                )
            })

            }


        </div>

    </section>

  )
}

export default BottomBar