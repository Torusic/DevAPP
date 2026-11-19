
import React, { useState } from 'react'
import {
  FaPenFancy,
  FaBriefcase,
  FaGraduationCap,
  FaLaptopCode,
  FaTrophy,
  FaUsers,
  FaRocket,
  FaArrowRight
} from 'react-icons/fa'
import { IoAdd, IoClose } from 'react-icons/io5'
import { LuSquareArrowOutUpRight } from 'react-icons/lu'
import { Link } from 'react-router-dom'

function Create() {
    const[community,setCommunity]=useState(false)

  const options = [
    { title: 'Job', icon: <FaBriefcase />, color: 'text-blue-600', bg: 'bg-blue-100', to: '/create/job' },
    { title: 'Internship', icon: <FaGraduationCap />, color: 'text-purple-600', bg: 'bg-purple-100', to: '/create/internship' },
    { title: 'Freelance Project', icon: <FaLaptopCode />, color: 'text-emerald-600', bg: 'bg-emerald-100', to: '/create/freelance' },
    { title: 'Hackathon', icon: <FaTrophy />, color: 'text-orange-600', bg: 'bg-orange-100', to: '/create/hackathon' },
    { title: 'Collaboration', icon: <FaUsers />, color: 'text-pink-600', bg: 'bg-pink-100', to: '/create/collaboration' },
    { title: 'Startup', icon: <FaRocket />, color: 'text-cyan-600', bg: 'bg-cyan-100', to: '/create/startup' }
  ]

  return (
    <section className="min-h-screen bg-violet-50 rounded-2xl p-4 md:p-6">

      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="mb-5">

        <h1 className="text-3xl md:text-5xl font-bold text-slate-800 tracking-tight">
          What would you like to <span className="text-violet-600">create?</span>
        </h1>
        </div>

        {/* Community Post */}
        <h1 className='font-bold text-md text-gradient lg:text-lg text-gray-600 p-2 mb-3'>Normal Blog</h1>
        <Link
          to="/create/post"
          className="flex items-center gap-3 p-3 mb-4 bg-white border border-violet-200 rounded-xl hover:border-violet-400 transition"
        >
          <div className="w-10 h-10 rounded-lg bg-violet-100 text-violet-600 flex items-center justify-center">
            <FaPenFancy />
          </div>
          

          <div className="flex-1">
            
            <h2 className="text-sm font-semibold text-slate-800">
              What's on your mind?
            </h2>
            <p className="text-xs text-slate-500">
              Share an update, question or idea.
            </p>
          </div>

          <FaArrowRight className="text-violet-500 text-sm" />
        </Link>

        {/* Opportunity Types */}
        <h1 className='font-bold text-md lg:text-lg text-gray-600 p-2 mt-6 mb-3 text-gradient'>Create Opportunities</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
         
          {options.map((item) => (
            <Link
              key={item.title}
              to={item.to}
              className="flex items-center gap-2.5 p-3 bg-white border border-violet-200 rounded-xl hover:shadow-md hover:-translate-y-0.5 transition-all"
            >
              <div className={`w-9 h-9 shrink-0 rounded-lg ${item.bg} ${item.color} flex items-center justify-center`}>
                {item.icon}
              </div>
              <div>
                
              <span className="text-xs md:text-sm font-semibold text-slate-700 flex-1">
                {item.title}
              </span>
             

              </div>


              <FaArrowRight className="text-[10px] text-slate-400" />
            </Link>
          ))}

        </div>
        <div className="mt-6 px-2 ">
  <h2 className="font-bold text-lg md:text-xl text-gray-700">
    Create Community
  </h2>

  <button onClick={()=>setCommunity(prev=>!prev)} className="w-full bg-gradient-to-r mb-50 cursor-pointer border from-purple-100 via-purple-50 to-purple-200 shadow hover:bg-purple-200 border-purple-300 p-3 rounded-xl my-2 text-left transition-all">
    <p className="text-xs md:text-sm text-gray-600 leading-5">
      Connect with fellow developers, share ideas and grow together.
      <span className=" font-semibold flex items-center justify-between pr-5 text-purple-700 mt-1">
        Create or Join a community <p className='text-lg font-bold' > <LuSquareArrowOutUpRight /></p>
      </span>
    </p>
  </button>
</div>

      </div>

      {
        community&&(
            <div className='p-3 bg-neutral-950/70  backdrop-blur-xs  z-50  bottom-0 top-0 left-0 right-0 fixed  flex items-center justify-center '>
                <div className='grid bg-white/95    w-full max-w-3xl p-5 rounded-md border border-purple-300'>
                <div className='flex items-center justify-between'>
                    <p className='font-bold bg-gradient-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent p-2 '>Developer Community.</p>
                    <IoClose 
                    onClick={()=>setCommunity(false)}
                    className='cursor-pointer text-purple-600' 
                        
                        />

                </div>
                    
                    <h2 className='mb-4 text-sm p-2 text-gradient text-slate-600'>Want to connect with like-minded developers and exchange ideas ?</h2>
                    <div className='flex items-center gap-3 mb-4'>
                        <button className='bg-purple-500 p-3 font-semibold text-white text-xs rounded-md text-gradient cursor-pointer'>
                            Create Community
                        </button>

                        <Link to={'/community'} className='border border-purple-600 p-3 text-xs font-semibold text-purple-600 cursor-pointer  hover:bg-purple-200'>
                            Join Community
                        </Link>

                    </div>


                </div>

            </div>
        )
      }
    </section>
  )
}

export default Create
