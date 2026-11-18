
import React, { useState } from 'react'
import {
  FaSearch,
  FaMapMarkerAlt,
  FaBriefcase,
  FaRegBookmark,
  FaBookmark,
  
  FaClock,
  FaBuilding,
  FaFilter
} from 'react-icons/fa'

function Jobs() {
  const [search, setSearch] = useState('')
  const [location, setLocation] = useState('')
  const [category, setCategory] = useState('All')
  const [saved, setSaved] = useState([])

  const jobs = [
    {
      id: 1,
      company: 'TechNova',
      title: 'Junior Full Stack Developer',
      type: 'Full-time',
      location: 'Nairobi',
      experience: 'Entry Level',
      salary: 'KSh 40k – 70k',
      category: 'FullStack',
      posted: '2d ago',
      logo: 'T',
      color: 'bg-blue-600',
      featured: true
    },
    {
      id: 2,
      company: 'CloudWorks',
      title: 'Frontend React Developer',
      type: 'Remote',
      location: 'Remote',
      experience: 'Junior',
      salary: 'Competitive',
      category: 'Frontend',
      posted: '1d ago',
      logo: 'C',
      color: 'bg-purple-600',
      featured: false
    },
    {
      id: 3,
      company: 'Digital Labs',
      title: 'Backend Python Developer',
      type: 'Full-time',
      location: 'Nairobi',
      experience: 'Entry Level',
      salary: 'KSh 50k – 90k',
      category: 'Backend',
      posted: '3d ago',
      logo: 'D',
      color: 'bg-emerald-600',
      featured: false
    }
  ]

  const categories = ['All', 'FullStack', 'Frontend', 'Backend']

  const filteredJobs = jobs.filter(job => {
    const matchesSearch=
    `${job.title}${job.company}${job.location}`.toLowerCase().includes(search.toLowerCase())


    const matchesCategory =
      category === 'All' || job.category === category

    return matchesSearch  && matchesCategory
  })

  const toggleSave = (id) => {
    setSaved(prev =>
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

  return (
    <section className="min-h-screen bg-indigo-50 px-5 py-2 md:px-10 lg:px-16 rounded-lg">

      <div className="max-w-7xl mx-auto">

        {/* Page heading */}
       <p className='font-bold lg:text-2xl text-lg text-gradient p-3 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent'>Jobs</p>

        {/* Search panel */}
        <div className="bg-white/80 backdrop-blur-3xl border border-indigo-200 rounded-2xl p-2 shadow-sm">

          <div className="flex md:grid-cols-[1fr_1fr_auto] gap-3">

            <div className="flex items-center gap-3 px-4">
                <div className='bg-indigo-100 p-2 rounded-lg'>
                    <FaSearch className="text-indigo-400 " />   
                </div>
              
              <input
                value={search}
                onChange={e => setSearch(e.target.value)}
                placeholder="Job title, company or location"
                className="w-full  outline-none  p-2 rounded-lg lg:text-sm text-xs text-slate-700"
              />
            </div>

            

            <button className=" text-white p-2 rounded-lg lg:text-sm text-xs font-semibold transition">
              
            </button>

          </div>
        </div>

        {/* Insights */}
{  /**       <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">

          {[
            { label: 'Opportunities', value: jobs.length, detail: 'Currently listed' },
            { label: 'Remote positions', value: jobs.filter(j => j.type === 'Remote').length, detail: 'Work from anywhere' },
            { label: 'Saved jobs', value: saved.length, detail: 'Your shortlist' }
          ].map(stat => (
            <div key={stat.label} className="bg-white border border-purple-100  rounded-2xl p-5">
              <p className="text-sm text-slate-500">{stat.label}</p>
              <h2 className="text-2xl font-bold text-slate-900 mt-2">{stat.value}</h2>
              <p className="text-xs text-slate-400 mt-1">{stat.detail}</p>
            </div>
          ))}

        </div>*/}

        {/* Job discovery */}
        <div className="mt-12">

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">

            <div>
              <h2 className="lg:text-xl text-md font-bold text-slate-900">
                Explore Jobs
              </h2>
              <p className="lg:text-sm text-xs text-slate-500 mt-1">
                Find a role that matches your skills and ambitions.
              </p>
            </div>

            <div className="flex items-center gap-2 text-sm text-slate-500">
              <FaFilter />
              Filter by category
            </div>

          </div>

          {/* Categories */}
          <div className="flex gap-2 flex-wrap mb-6">

            {categories.map(item => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`px-4 py-2 text-xs rounded-full  font-medium transition ${
                  category === item
                    ? 'bg-indigo-500 text-white'
                    : 'bg-white border border-slate-200 text-slate-600 hover:border-indigo-300 transition-all duration-500'
                }`}
              >
                {item}
              </button>
            ))}

          </div>

          {/* Listings */}
          <div className="space-y-2">

            {filteredJobs.map(job => (

              <article
                key={job.id}
                className="bg-white border border-indigo-100 rounded-2xl p-5 md:p-6 hover:border-indigo-200 hover:shadow-md transition"
              >

                <div className="flex items-start gap-4">

                  <div className={`${job.color} w-12 h-12 rounded-xl text-white flex items-center justify-center font-bold text-xl shrink-0`}>
                    {job.logo}
                  </div>

                  <div className="flex-2 min-w-0">

                    <div className="flex flex-wrap items-center gap-2 mb-2">

                      <span className="text-xs font-medium text-slate-500">
                        {job.company}
                      </span>

                      {job.featured && (
                        <span className="text-xs font-semibold text-indigo-600 bg-blue-50 px-2 py-1 rounded-md">
                          Featured
                        </span>
                      )}

                    </div>

                    <h3 className="font-bold lg:text-lg text-xs text-slate-900">
                      {job.title}
                    </h3>

                    <div className="grid grid-cols-2 gap-x-4 gap-y-2 mt-3 text-xs text-slate-500">

                      <span className="flex items-center gap-2">
                        <FaBriefcase /> {job.type}
                      </span>

                      <span className="flex items-center gap-2">
                        <FaMapMarkerAlt /> {job.location}
                      </span>

                      <span className="flex items-center gap-2">
                        <FaBuilding /> {job.experience}
                      </span>

                      <span className="flex items-center gap-2">
                        <FaClock /> {job.posted}
                      </span>

                    </div>


                  </div>

                  <button
                    onClick={() => toggleSave(job.id)}
                    className="text-slate-400 hover:text-indigo-600 p-2"
                    aria-label="Save job"
                  >
                    {saved.includes(job.id)
                      ? <FaBookmark className="text-indigo-600" />
                      : <FaRegBookmark />
                    }
                  </button>

                </div>
                
                    <div className="mt-4 flex flex-wrap border-t border-t-indigo-200 p-2 items-center justify-between">

                    <span className="lg:text-sm flex  items-center text-xs  font-semibold text-slate-500">
                      Salary:  <h5 className='text-slate-800 text-sm ml-2'>{job.salary}</h5>
                    </span>


                  <button className="flex items-center gap-2 lg:text-sm text-xs font-semibold bg-indigo-100 p-2 rounded-full text-indigo-600 hover:text-indigo-700">
                    View details 
                  </button>

                    </div>

               

              </article>

            ))}

            {filteredJobs.length === 0 && (
              <div className="bg-white border border-slate-200 rounded-2xl p-12 text-center">
                <FaSearch className="text-3xl text-slate-300 mx-auto mb-4" />
                <h3 className="font-semibold text-slate-800">
                  No opportunities found
                </h3>
                <p className="text-sm text-slate-500 mt-2">
                  Try adjusting your search or category.
                </p>
              </div>
            )}

          </div>

        </div>

      </div>

    </section>
  )
}

export default Jobs
