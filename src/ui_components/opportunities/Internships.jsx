import React, { useState } from 'react'
import { FaSearch, FaFilter, FaBriefcase, FaBookmark, FaRegBookmark} from 'react-icons/fa'

function Internships() {

    const [search,setSearch]=useState('')
    const[location,setLocation]=useState('')
    const[category,setCategory]=useState('All')
    const [saved, setSaved] = useState([])


      const internships = [
    {
      id: 1,
      company: 'TechNova',
      title: 'Junior Full Stack Developer',
      type: 'Full-time',
      location: 'Nairobi',
      experience: 'Entry Level',
      salary: 'KSh 40k – 70k',
      category: 'Engineering',
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

  const categories=['All','FullStack','Frontend','Backend']
  const filterInternships=internships.filter(internship=>{
   const matchesSearch=
    `${internship.title}${internship.company}${internship.location}`.toLowerCase().includes(search.toLowerCase())
  
   const matchesCategory=category==='All' || internship.category===category

   return matchesSearch && matchesCategory
  })

  const toggleSave=(id)=>{
    setSaved(prev=>prev.includes(id)
    ? prev.filter(item=>item!==id)
    :[...prev,id] )
  }




  return (
    <section className='min-h-screen mb-20  bg-violet-50 rounded-2xl px-5 py-2 md:px-10 lg:px-16'>
        <div className='max-w-7xl mx-auto'>
            <p className='lg:text-2xl text-lg font-bold bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent text-gradient p-2 '>Internships</p>

            <div className='bg-white p-2 border border-violet-200 rounded-2xl shadow-2xs'>
                <div className='grid grid-cols-1 md:grid-cols-[1fr_1fr_auto]'>
                    <div className='flex items-center gap-3 px-4'>
                        <div className='bg-violet-100 p-2 rounded-lg'>
                            <FaSearch/>
                        </div>
                        <input
                        value={search}
                        onChange={e=>setSearch(e.target.value)}
                        placeholder='Internship title, skill or company'
                        className='text-xs w-full p-2 outline-none'
                         type="text" />

                        

                    </div>

                </div>

            </div>

            <div className='mt-12'>
                <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6'>
                    <div className=''>
                        <h2 className='lg:text-xl text-md  font-bold text-slate-800 text-gradient'>Explore Internships</h2>
                        <p className='text-xs lg:text-md mt-1 text-slate-500'>Find the role that matches your Skill and ambitions</p>
                    </div>

                    <div className='flex items-center gap-2 text-sm text-gradient text-slate-500'>
                        <FaFilter/>
                        Filter by category
                    </div>
                    

                </div>
                {/**Category */}
                <div className='flex gap-2 flex-wrap mb-6 '>
                    {categories.map(cat=>(
                        <button
                        key={cat}
                        onClick={()=>setCategory(cat)}
                        className={`px-4 py-2 text-xs rounded-full font-medium transition cursor-pointer ${category === cat
                             ? 'bg-violet-500 text-white'
                             :'bg-white border hover:border-violet-400 border-slate-200 transition-all duration-500'} `}
                        >
                            {cat}

                        </button>
                    ))

                    }

                </div>

                <div className='space-y-2'>
                    {
                        filterInternships.map(intern=>(
                            <article
                            key={intern.id}
                            className='bg-white border rounded-2xl p-5 md:p-6 border-violet-100 hover:border-violet-200 hover:shadow-md transition'
                            >
                                <div className='flex items-start gap-4 '>
                                    <div className={`${intern.color} w-12 h-12 flex items-center justify-center rounded-xl font-bold text-xl shrink-0` }>
                                        {intern.logo}
                                    </div>

                                    <div className='flex-2 min-w-0'>
                                        <div className='flex flex-wrap items-center gap-2 mb-2'>
                                            <span className='text-xs font-mdeium text-slate-500'>{intern.company}</span>
                                            {
                                                intern.featured &&(
                                                    <span className='text-xs font-semibold text-violet-600 bg-violet-100 px-2 py-1 rounded-md'>
                                                        featured</span>
                                                )
                                            }

                                        </div>
                                        <h3 className='text-xs lg:text-md text-slate-900 font-semibold'>
                                            {intern.title}
                                        </h3>

                                        <div className='grid grid-cols-2 gap-x-4 gap-y-2 mt-3 text-xs text-slate-500'>
                                            <span className='flex  gap-2 items-center' >
                                                <FaBriefcase/>{intern.type}
                                            </span>
                                            <span className='flex  gap-2 items-center' >
                                                <FaBriefcase/>{intern.location}
                                            </span>
                                            <span className='flex  gap-2 items-center' >
                                                <FaBriefcase/>{intern.experience}
                                            </span>
                                            <span className='flex  gap-2 items-center' >
                                                <FaBriefcase/>{intern.posted}
                                            </span>

                                        </div>




                                    </div>
                                     <button
                                        onClick={() => toggleSave(intern.id)}
                                        className="text-slate-400 hover:text-violet-600 cursor-pointer p-2"
                                        aria-label="Save job"
                                        >
                                        {saved.includes(intern.id)
                                            ? <FaBookmark className="text-violet-600" />
                                            : <FaRegBookmark/>
                                        }
                                        </button>

                                    

                                </div>
                                    <div className="mt-4 flex flex-wrap border-t border-t-violet-200 p-2 items-center justify-between">

                                            <span className="lg:text-sm flex  items-center text-xs  font-semibold text-slate-500">
                                              Salary:  <h5 className='text-slate-800 text-xs ml-2'>{intern.salary}</h5>
                                            </span>

                                        <button className="flex items-center gap-2 lg:text-sm text-xs font-semibold bg-violet-100 p-2 rounded-full text-violet-600 hover:text-violet-700">
                                            View details 
                                        </button>

                                      </div>

                            </article>
                        ))
                    }

                </div>

            </div>

        </div>

    </section>
  )
}

export default Internships