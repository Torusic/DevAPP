import React, { useState } from 'react'
import { CgProfile } from 'react-icons/cg'
import { FaBookmark, FaBriefcase } from 'react-icons/fa'
import { HiUserGroup } from 'react-icons/hi'
import { IoMdAddCircleOutline, IoMdHome } from 'react-icons/io'
import { Link } from 'react-router-dom'

function SideBar() {

    const[active,setActive]=useState('home')
    const sidelinks=[
        {name:'Home',href:'/home',icon:<IoMdHome  />},
        {name:'Opportunities',href:'/opportunities',icon:<FaBriefcase />},
        {name:'Create Post',href:'/create',icon:<IoMdAddCircleOutline />},
        {name:'Developers',href:'/developers',icon:<HiUserGroup />},
        {name:'Profile',href:'/profile',icon:<CgProfile />}
    ]
  return (
    <section className='p-2  fixed w-[300px] bg-slate-50  h-full border border-t-blue-300'>
        <div className='flex flex-col p-2'>
            {sidelinks.map((side)=>{
                const isActive=active===side.name

                return(
                    <Link
                    key={side.name}
                    to={side.href}
                    onClick={()=>setActive(side.name)}
                    className={`flex items-center px-2 space-x-2 rounded-xs ${isActive ?"bg-blue-100":"hover:bg-blue-50 cursor-pointer "}`}>
                        <p className='p-2 text-blue-600 '>{side.icon}</p>
                        <p className='p-2 font-medium text-sm text-graient text-indigo-600  '>{side.name}</p>

                    </Link>
                )
            })

            }


        </div>

    </section>

  )
}

export default SideBar