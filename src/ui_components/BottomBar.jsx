import React, { useState } from 'react'
import { CgProfile } from 'react-icons/cg'
import { FaBookmark, FaBriefcase } from 'react-icons/fa'
import { HiUserGroup } from 'react-icons/hi'
import { IoMdHome } from 'react-icons/io'

function BottomBar() {

    const[active,setActive]=useState('#home')
    const sidelinks=[
        {name:'Home',href:'#home',icon:<IoMdHome size={20} />},
        {name:'Opportunities',href:'#opportunities',icon:<FaBriefcase />},
        {name:'Developers',href:'#developers',icon:<HiUserGroup />},
        {name:'Saved',href:'#saved',icon:<FaBookmark />},
        {name:'Profile',href:'#profile',icon:<CgProfile />}
    ]
  return (
    <section className='px-2  h-full lg:hidden  sticky z-100 bottom-0 bg-white/60 backdrop-blur-md right-0 left-0  rounded-xl  border-2'>
        <div className='flex  p-2 w-[350px]'>
            {sidelinks.map((side)=>{
                const isActive=active===side.name

                return(
                    <div className=' w-full flex items-center justify-between' >
                    <div 
                    onClick={()=>setActive(side.name)}
                    className={`  flex items-center justify-between   px-2 space-x-2 rounded-xs ${isActive ?"bg-blue-100 rounded-full":"hover:bg-blue-50 cursor-pointer "}`}>
                        <p className='p-2 text-blue-600 '>{side.icon}</p>
                        {/**<p className='p-2 font-semibold text-xs bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent  '>{side.name}</p>*/}

                    </div>

                    </div>
                    
                )
            })

            }


        </div>

    </section>

  )
}

export default BottomBar