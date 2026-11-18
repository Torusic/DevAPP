import React, { useState } from 'react'
import { FaSearch,} from 'react-icons/fa'

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
   const matchesSearch= `${internship.title}${internship.company}`.toLowerCase().includes(search.toLowerCase())
   const matchesLocation=internship.location.toLowerCase().includes(location.toLowerCase())
   const matchesCategory=category==='All' || internship.category===category
  })

  const toggleSave=(id)=>{
    setSaved(prev.includes(id)
    ? prev.filter(item=>item!==id)
    :[...prev,id] )
  }




  return (
    <section className='min-h-screen  bg-violet-50 rounded-2xl px-5 py-2 md:px-10 lg:px-16'>
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

        </div>

    </section>
  )
}

export default Internships