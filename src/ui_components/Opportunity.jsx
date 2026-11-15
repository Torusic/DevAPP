
import React, { useState } from 'react'
import { FaBookmark, FaRegBookmark, FaSearch, FaMapMarkerAlt } from 'react-icons/fa'
import { HiOutlineBriefcase, HiOutlineClock } from 'react-icons/hi'
import { IoFilterOutline } from 'react-icons/io5'

function Opportunity() {

    const [search, setSearch] = useState('')
    const [category, setCategory] = useState('All')
    const [saved, setSaved] = useState([])

    const categories = [
        'All',
        'Internship',
        'Full-time',
        'Remote',
        'Freelance',
        'Graduate'
    ]

    const opportunities = [
        {
            id: 1,
            company: 'Tamu Group',
            role: 'Frontend Developer Intern',
            location: 'Nairobi, Kenya',
            type: 'Internship',
            category: 'Frontend',
            salary: 'Competitive',
            deadline: '20 Nov 2026',
            description: 'Work with the design and engineering teams to build responsive web applications.',
            skills: ['React', 'JavaScript', 'CSS'],
            logo: 'T',
            color: 'bg-orange-100 text-orange-600',
            featured: true
        },
        {
            id: 2,
            company: 'Saolix Group',
            role: 'Junior Software Developer',
            location: 'Nairobi, Kenya',
            type: 'Full-time',
            category: 'Full-stack',
            salary: 'Not disclosed',
            deadline: '30 Nov 2026',
            description: 'Contribute to modern software applications and backend systems.',
            skills: ['React', 'Python', 'PostgreSQL'],
            logo: 'S',
            color: 'bg-blue-100 text-blue-600',
            featured: true
        },
        {
            id: 3,
            company: 'Tech Innovations',
            role: 'Python Backend Developer',
            location: 'Remote',
            type: 'Remote',
            category: 'Backend',
            salary: 'Negotiable',
            deadline: '05 Dec 2026',
            description: 'Develop APIs, manage databases and build scalable backend services.',
            skills: ['Python', 'Django', 'REST API'],
            logo: 'T',
            color: 'bg-purple-100 text-purple-600',
            featured: false
        },
        {
            id: 4,
            company: 'Digital Solutions',
            role: 'Software Engineering Graduate',
            location: 'Nairobi, Kenya',
            type: 'Graduate',
            category: 'Full-stack',
            salary: 'Not disclosed',
            deadline: '10 Dec 2026',
            description: 'Join a development team and gain practical experience building digital products.',
            skills: ['JavaScript', 'React', 'Node.js'],
            logo: 'D',
            color: 'bg-green-100 text-green-600',
            featured: false
        }
    ]

    const toggleSave = (id) => {
        setSaved(prev =>
            prev.includes(id)
                ? prev.filter(item => item !== id)
                : [...prev, id]
        )
    }

    const filteredOpportunities = opportunities.filter((job) => {
        const matchesSearch =
            job.role.toLowerCase().includes(search.toLowerCase()) ||
            job.company.toLowerCase().includes(search.toLowerCase()) ||
            job.skills.some(skill =>
                skill.toLowerCase().includes(search.toLowerCase())
            )

        const matchesCategory =
            category === 'All' || job.type === category

        return matchesSearch && matchesCategory
    })

    return (
        <section className='min-h-screen bg-slate-50 px-4 md:px-8 py-8 pb-28'>

            {/* Header */}
            <div className='max-w-7xl mx-auto'>

                <div className='flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8'>

                    <div>
                        <p className='text-sm text-blue-600 font-semibold mb-2'>
                            DEVFOLII / CAREERS
                        </p>

                        <h1 className='text-2xl md:text-3xl font-bold text-slate-900'>
                            Discover Opportunities
                        </h1>

                        <p className='text-slate-500 mt-2 text-sm'>
                            Find your next opportunity and take your career forward.
                        </p>
                    </div>

                    <button className='bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl text-sm font-semibold transition'>
                        + Post an Opportunity
                    </button>

                </div>

                {/* Search */}
                <div className='bg-white border border-slate-200 rounded-2xl p-3 shadow-sm mb-7'>

                    <div className='flex items-center gap-3 px-3'>
                        <FaSearch className='text-slate-400' />

                        <input
                            type='text'
                            placeholder='Search jobs, companies or skills...'
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className='w-full outline-none py-3 text-sm text-slate-700'
                        />

                        <button className='hidden sm:flex items-center gap-2 bg-slate-100 px-4 py-2 rounded-lg text-sm text-slate-600'>
                            <IoFilterOutline />
                            Filter
                        </button>
                    </div>

                </div>

                {/* Categories */}
                <div className='flex items-center gap-2 overflow-x-auto pb-4 mb-5'>

                    {categories.map((item) => (
                        <button
                            key={item}
                            onClick={() => setCategory(item)}
                            className={`whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium transition
                            ${category === item
                                ? 'bg-blue-600 text-white'
                                : 'bg-white border border-slate-200 text-slate-600 hover:bg-blue-50'
                            }`}
                        >
                            {item}
                        </button>
                    ))}

                </div>

                {/* Featured */}
                <div className='mb-8'>
                    <div className='flex justify-between items-center mb-4'>
                        <div>
                            <h2 className='font-bold text-lg text-slate-900'>
                                Featured Opportunities
                            </h2>
                            <p className='text-sm text-slate-500 mt-1'>
                                Handpicked opportunities worth exploring.
                            </p>
                        </div>
                    </div>

                    <div className='grid md:grid-cols-2 gap-4'>

                        {opportunities.filter(job => job.featured).map(job => (

                            <div key={job.id} className='bg-white border border-slate-200 rounded-2xl p-5 hover:shadow-md transition'>

                                <div className='flex justify-between items-start mb-5'>

                                    <div className='flex gap-3 items-center'>
                                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-xl ${job.color}`}>
                                            {job.logo}
                                        </div>

                                        <div>
                                            <h3 className='font-bold text-slate-900'>
                                                {job.company}
                                            </h3>
                                            <p className='text-xs text-slate-500'>
                                                {job.location}
                                            </p>
                                        </div>
                                    </div>

                                    <button
                                        onClick={() => toggleSave(job.id)}
                                        className='text-slate-400 hover:text-blue-600'
                                        aria-label='Save opportunity'
                                    >
                                        {saved.includes(job.id)
                                            ? <FaBookmark className='text-blue-600' />
                                            : <FaRegBookmark />
                                        }
                                    </button>

                                </div>

                                <h3 className='font-bold text-lg text-slate-900 mb-2'>
                                    {job.role}
                                </h3>

                                <p className='text-sm text-slate-500 leading-relaxed mb-4'>
                                    {job.description}
                                </p>

                                <div className='flex flex-wrap gap-2 mb-5'>
                                    {job.skills.map(skill => (
                                        <span key={skill} className='bg-slate-100 text-slate-600 text-xs px-3 py-1.5 rounded-lg'>
                                            {skill}
                                        </span>
                                    ))}
                                </div>

                                <div className='flex justify-between items-center border-t border-slate-100 pt-4'>
                                    <span className='text-xs text-slate-500'>
                                        Deadline: {job.deadline}
                                    </span>

                                    <button className='bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700'>
                                        View Details
                                    </button>
                                </div>

                            </div>

                        ))}

                    </div>
                </div>

                {/* All Opportunities */}
                <div>

                    <div className='flex justify-between items-center mb-5'>
                        <div>
                            <h2 className='font-bold text-lg text-slate-900'>
                                All Opportunities
                            </h2>
                            <p className='text-sm text-slate-500 mt-1'>
                                {filteredOpportunities.length} opportunities found
                            </p>
                        </div>
                    </div>

                    <div className='space-y-4'>

                        {filteredOpportunities.map(job => (

                            <div key={job.id} className='bg-white border border-slate-200 rounded-2xl p-5 hover:border-blue-200 transition'>

                                <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4'>

                                    <div className='flex gap-3 items-start'>

                                        <div className={`w-12 h-12 shrink-0 rounded-xl flex items-center justify-center font-bold text-xl ${job.color}`}>
                                            {job.logo}
                                        </div>

                                        <div>
                                            <p className='text-xs text-slate-500 mb-1'>
                                                {job.company}
                                            </p>

                                            <h3 className='font-bold text-slate-900'>
                                                {job.role}
                                            </h3>

                                            <div className='flex flex-wrap gap-3 mt-2 text-xs text-slate-500'>
                                                <span className='flex items-center gap-1'>
                                                    <FaMapMarkerAlt />
                                                    {job.location}
                                                </span>

                                                <span className='flex items-center gap-1'>
                                                    <HiOutlineBriefcase />
                                                    {job.type}
                                                </span>

                                                <span className='flex items-center gap-1'>
                                                    <HiOutlineClock />
                                                    {job.deadline}
                                                </span>
                                            </div>

                                        </div>
                                    </div>

                                    <div className='flex gap-2 items-center'>

                                        <button
                                            onClick={() => toggleSave(job.id)}
                                            className='p-3 border border-slate-200 rounded-xl text-slate-500 hover:text-blue-600'
                                            aria-label='Save opportunity'
                                        >
                                            {saved.includes(job.id)
                                                ? <FaBookmark />
                                                : <FaRegBookmark />
                                            }
                                        </button>

                                        <button className='bg-blue-600 text-white px-5 py-3 rounded-xl text-sm font-semibold hover:bg-blue-700'>
                                            Apply Now
                                        </button>

                                    </div>

                                </div>

                            </div>

                        ))}

                        {filteredOpportunities.length === 0 && (
                            <div className='bg-white border border-slate-200 rounded-2xl p-10 text-center'>
                                <FaSearch className='mx-auto text-3xl text-slate-300 mb-3' />
                                <h3 className='font-bold text-slate-800'>
                                    No opportunities found
                                </h3>
                                <p className='text-sm text-slate-500 mt-2'>
                                    Try another search term or category.
                                </p>
                            </div>
                        )}

                    </div>

                </div>

            </div>

        </section>
    )
}

export default Opportunity
