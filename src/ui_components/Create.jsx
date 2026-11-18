
import React from 'react'
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
import { IoAdd } from 'react-icons/io5'
import { Link } from 'react-router-dom'

function Create() {

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
              <p className='text-xs p-2 text-slate-500 flex items-center gap-2'>Create <IoAdd/> </p>

              </div>


              <FaArrowRight className="text-[10px] text-slate-400" />
            </Link>
          ))}

        </div>

      </div>
    </section>
  )
}

export default Create
