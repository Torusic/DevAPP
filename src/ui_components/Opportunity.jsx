
import React from 'react'
import {
  FaBriefcase,
  FaGraduationCap,
  FaLaptopCode,
  FaTrophy,
  FaUsers,
  FaRocket
} from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Opportunity() {
  const opportunity = [
    {
      title: 'Jobs',
      description: 'Discover career opportunities, connect with employers and find your next role in technology.',
      icon: <FaBriefcase />,
      bg: 'from-blue-50 to-indigo-200',
      color: 'text-blue-600',
      to:'/opportunities/jobs'
    },
    {
      title: 'Internships',
      description: 'Gain practical experience, develop industry-ready skills and grow your career.',
      icon: <FaGraduationCap />,
      bg: 'from-purple-50 to-violet-200',
      color: 'text-purple-600'
    },
    {
      title: 'Freelance',
      description: 'Find paid projects, work with clients and turn your technical skills into income.',
      icon: <FaLaptopCode />,
      bg: 'from-emerald-50 to-teal-200',
      color: 'text-emerald-600'
    },
    {
      title: 'Hackathons',
      description: 'Build innovative solutions, challenge yourself and showcase your creativity.',
      icon: <FaTrophy />,
      bg: 'from-orange-50 to-amber-200',
      color: 'text-orange-600'
    },
    {
      title: 'Collaborations',
      description: 'Connect with developers, find project partners and build something meaningful.',
      icon: <FaUsers />,
      bg: 'from-pink-50 to-rose-100',
      color: 'text-pink-600'
    },
    {
      title: 'Startups',
      description: 'Discover emerging startups, join founding teams and bring ideas to life.',
      icon: <FaRocket />,
      bg: 'from-cyan-50 to-sky-200',
      color: 'text-cyan-600'
    }
  ]

  return (
    <section className="min-h-screen bg-slate-50 top-0 px-5 py-5 md:px-10 py-2 lg:px-16 rounded-lg">

      {/* Header */}
      <div className="max-w-3xl mx-auto text-center mb-12">


        <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent  tracking-tight">
          Find your next <span className="text-blue-600">opportunity.</span>
        </h1>

        <p className="text-slate-500 mt-4 text-sm md:text-base leading-relaxed">
          Explore opportunities, connect with innovative teams and take
          the next step in your developer journey.
        </p>
      </div>

      {/* Opportunity Cards */}
      <div className="max-w-6xl mx-auto backdrop-blur-2xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {opportunity.map((opp) => (
          <div
            key={opp.title}
            className={`group relative overflow-hidden bg-gradient-to-br ${opp.bg}
            border border-white rounded-2xl p-6 shadow-sm
            hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
          >

            {/* Decorative background circle */}
            <div className="absolute -right-10 -top-10 w-36 h-36 bg-white/30 rounded-full group-hover:scale-125 transition-transform duration-500" />

            <div className="relative z-10">

              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-xl ${opp.color} mb-6`}>
                {opp.icon}
              </div>

              {/* Content */}
              <h2 className="text-xl font-bold text-slate-800 mb-2">
                {opp.title}
              </h2>

              <p className="text-sm text-slate-600 leading-6 min-h-[72px]">
                {opp.description}
              </p>

              {/* Explore Button */}
              <Link
                to={opp.to}
                className={`mt-6 flex items-center gap-2 text-sm font-semibold ${opp.color} group-hover:gap-4 transition-all duration-300`}
              >
                Explore {opp.title.toLowerCase()}
                <span>→</span>
              </Link>

            </div>
          </div>
        ))}

      </div>


    </section>
  )
}

export default Opportunity
