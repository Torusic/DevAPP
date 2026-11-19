import React from 'react'

function CreateJob() {
    return (
        <section className='bg-indigo-50 min-h-screen  rounded-2xl p-2'>
            <div className='max-w-7xl w-full mx-auto p-2 '>
                <div className='grid border-b border-b-indigo-200 '>
                    <h1 className='bg-gradient-to-r from-blue-500 lg:text-xl text-lg   to-pink-600 bg-clip-text text-transparent font-bold text-gradient'>Post a Job Opportunity</h1>
                    <span className='text-xs lg:text-lg text-slate-600 ext-gadient mb-4 '>Provide he details below to connect with qualified candidate</span>



                </div>
                <form className='grid gap-2'>
                    <div className='bg-white p-4 mt-6 rounded-lg border border-indigo-200 grid'>
                        <h1 className='font-bold text-md text-slate-700'>1. Basic Information</h1>
                        <p className='text-slate-500 text-xs p-2'> Start by introducing job opportunity</p>
                        <div className='grid lg:grid-cols-2 md:grid-cols-2'>
                            <div className='grid 2 p-2 mb-1'>
                                <label className='font-bold mb-1 text-slate-700 text-sm text-gradient'>Job title *</label>
                                <input
                                    placeholder='e.g. Junior Software Developer'
                                    className='p-2 text-slate-800 text-xs outline-none my-2 rounded-lg border border-indigo-200'
                                    type="text" />

                            </div>
                            <div className='grid 2 p-2 mb-1'>
                                <label className='font-bold mmb-1 text-slate-700 text-sm text-gradient'>Company/Organization Name*</label>
                                <input
                                    placeholder=' Enter Company name'
                                    className='p-2 text-slate-800 text-xs outline-none my-2 rounded-lg border border-indigo-200'
                                    type="text" />

                            </div>
                            <div className='grid p-2 mb-1'>
                                <label className='font-bold mb-1 text-slate-700 text-sm text-gradient' htmlFor="">Job Category</label>
                                <select name="category"
                                    required
                                    className='border outline-none text-xs p-2 text-slate-700  rounded-lg bg-gray-100'
                                    id="">

                                    <option disabled className='p-2 bg-indigo-100 text-xs rounded-lg text-slate-900' value="">Select Category</option>
                                    <option className='p-2 bg-indigo-100 text-xs rounded-lg text-slate-900' value="">Software Development</option>
                                    <option className='p-2 bg-indigo-100 text-xs rounded-lg text-slate-900' value="">IT & Netwroking</option>
                                    <option className='p-2 bg-indigo-100 text-xs rounded-lg text-slate-900' value="">Data & Analytics</option>
                                    <option className='p-2 bg-indigo-100 text-xs rounded-lg text-slate-900' value="">Cybersecurity</option>
                                    <option className='p-2 bg-indigo-100 text-xs rounded-lg text-slate-900' value="">UI/UX Design</option>
                                    <option className='p-2 bg-indigo-100 text-xs rounded-lg text-slate-900' value="">Marketing</option>
                                    <option className='p-2 bg-indigo-100 text-xs rounded-lg text-slate-900' value="">Business</option>
                                    <option className='p-2 bg-indigo-100 text-xs rounded-lg text-slate-900' value="">Others</option>




                                </select>
                            </div>
                            <div className="grid  p-2 mb-1">
                                <label className='font-bold mb-1  text-slate-700 text-sm text-gradient'>Job Description *</label>
                                <textarea
                                    name="description"
                                    rows="5"
                                    placeholder="Describe the role, responsibilities and what the successful candidate will be doing..."
                                    className='p-2 text-slate-800 text-xs outline-none my-2 rounded-lg border border-indigo-200'
                                    required
                                />
                            </div>

                        </div>


                    </div>
                    <div className='bg-white p-3 rounded-2xl'>
                        <h2 className='font-bold lg:text-md text-md text-slate-700'>2. Employment Details</h2>
                        <div className='grid grid-cols-2 lg:justify-between gap-2 p-2'>
                            <div className='grid'>
                                <label className='font-bold mb-1 p-2 text-slate-700 lg:text-sm text-xs text-gradient' htmlFor="">Employment Type</label>
                                <select name="" id="" className='outline-none border border-indigo-100 p-2  rounded-lg bg-gray-100 text-xs'>
                                    <option value="">Select Category</option>
                                    <option value="">Full-Time</option>
                                    <option value="">Part-Time</option>
                                    <option value="">Contract</option>
                                    <option value="">Temporary</option>
                                </select>


                            </div>
                            <div className='grid  p-2 mb-1'>
                                <label className='font-bold mb-1 p-2 text-slate-700 lg:text-sm text-xs text-gradient' htmlFor="">Work Arrangement</label>
                                <select name="" id="" className='outline-none border border-indigo-100 p-2  rounded-lg bg-gray-100 text-xs'>
                                    <option value="">Select Category</option>
                                    <option value="">On-site</option>
                                    <option value="">Remote</option>
                                    <option value="">Hybrid</option>

                                </select>

                            </div>

                        </div>
                        <div className='grid  p-2 mb-1'>
                            <label className='font-bold mb-1 p-2 text-slate-700 lg:text-sm text-xs text-gradient' htmlFor="">Location</label>
                            <input
                                placeholder=' Enter location'
                                className='p-2 text-slate-800 text-xs outline-none my-2 rounded-lg border border-indigo-200'
                                type="text" />
                        </div>


                    </div>
                    <div className='bg-white p-2 rounded-lg'>
                        <h2 className='font-bold mb-1 p-2 text-slate-700 lg:text-md text-md text-gradient'>3. Candidates Requirement</h2>
                        <div className='grid lg:grid-cols-2 md:grid-cols-2 lg:justify-between gap-2 p-2'>
                            <div className='grid p-2 mb-1''>
                                <label className='font-bold mb-1 p-2 text-slate-700 lg:text-sm text-xs text-gradient' htmlFor="">Experience Level</label>
                                <select name="" id="" className='outline-none border border-indigo-100 p-2  rounded-lg bg-gray-100 text-xs'>
                                    <option value="">Entry-level</option>
                                    <option value="">Graduate</option>
                                    <option value="">Junior</option>
                                    <option value="">Mid-evel</option>
                                    <option value="">Temporary</option>
                                    <option value="">Any Other Experience</option>
                                </select>


                            </div>
                            <div className='grid  p-2 mb-1'>
                                <label className='font-bold mb-1 p-2 text-slate-700 lg:text-sm text-xs text-gradient' htmlFor="">Minimum Qualification</label>
                                <textarea
                                    placeholder="e.g. Bachelor's degree in Computer Science or equivalent..."
                                    className='p-2 text-slate-800 text-xs outline-none my-2 rounded-lg border border-indigo-200'
                                    type="text" />

                            </div>
                                                        <div className='grid  p-2 mb-1'>
                                <label className='font-bold mb-1 p-2 text-slate-700 lg:text-sm text-xs text-gradient' htmlFor="">Required Skills</label>
                                <input
                                    placeholder="e.g. React, Python, SQL"
                                    className='p-2 text-slate-800 text-xs outline-none my-2 rounded-lg border border-indigo-200'
                                    type="text" />

                            </div>
                             <div className='grid  p-2 mb-1'>
                                <label className='font-bold mb-1 p-2 text-slate-700 lg:text-sm text-xs text-gradient' htmlFor="">Additional Requirements</label>
                                <textarea
                                    placeholder="e.g. Certifications, portfolio, communication skills..."
                                    className='p-2 text-slate-800 text-xs outline-none my-2 rounded-lg border border-indigo-200'
                                    type="text" />

                            </div>

                        </div>

                    </div>




                </form>

            </div>

        </section>
    )
}

export default CreateJob