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
                        <div className='grid lg:grid-cols-2 lg:justify-between gap-2 p-2'>
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
                            <div className='grid p-2 mb-1'>
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
                    <div className='bg-white p-2 rounded-lg'>
                        <h2 className='font-bold mb-1 p-2 text-slate-700 lg:text-md text-md text-gradient'>4. Compensation</h2>
                        <div className='grid p-2'>
                            <label className='font-bold mb-1 p-2 text-slate-700 lg:text-sm text-xs text-gradient' htmlFor="">Salary type</label>
                            <select name="" id="" className='outline-none border border-indigo-100 p-2  rounded-lg bg-gray-100 text-xs'>
                                <option value="">Select Salary type</option>
                                <option value="">Monthly</option>
                                <option value="">Annually</option>
                                <option value="">Hourly</option>
                                <option value="">Daily</option>
                                <option value="">Negotiable</option>

                            </select>
                            <p className='font-bold mb-1 p-2 text-slate-700 lg:text-sm mt-4 text-xs text-gradient'> Salary Range</p>

                            <div className='grid lg:grid-cols-2 gap-2'>


                                <div className='grid  px-2 mb-1'>
                                    <label className='font-bold mb-1 p-2 text-slate-700 lg:text-sm text-xs text-gradient' htmlFor="">Minimum</label>
                                    <input
                                        placeholder="e.g. KSH.12,345"
                                        className='p-2 text-slate-800 text-xs outline-none  rounded-lg border border-indigo-200'
                                        type="text" />

                                </div>
                                <div className='grid  p-2 mb-1'>
                                    <label className='font-bold mb-1 p-2 text-slate-700 lg:text-sm text-xs text-gradient' htmlFor="">maximum</label>
                                    <input
                                        placeholder="e.g. KSH. 54,321"
                                        className='p-2 text-slate-800 text-xs outline-none  rounded-lg border border-indigo-200'
                                        type="text" />

                                </div>



                            </div>


                        </div>

                    </div>

                    <div className="bg-white p-4 mb-30 rounded-xl border border-indigo-100">
                        <div className="mb-4">
                            <h2 className="font-bold text-md text-slate-700">
                                5. Application Details
                            </h2>
                            <p className="text-slate-500 text-xs mt-1">
                                Provide instructions on how interested candidates can apply.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4 p-2">

                            {/* Application Method */}
                            <div className="grid gap-2">
                                <label className="font-bold text-sm text-slate-700">
                                    Application Method *
                                </label>
                                <select
                                    name="application_method"
                                    required
                                    className="outline-none border border-indigo-100 p-3 rounded-lg bg-gray-50 text-xs"
                                >
                                    <option value="">Select application method</option>
                                    <option value="email">Email Application</option>
                                    <option value="website">Company Website</option>
                                    <option value="platform">Apply Through Platform</option>
                                    <option value="external_link">External Application Link</option>
                                </select>
                            </div>

                            {/* Application Email */}
                            <div className="grid gap-2">
                                <label className="font-bold text-sm text-slate-700">
                                    Application Email
                                </label>
                                <input
                                    type="email"
                                    name="application_email"
                                    placeholder="e.g. careers@company.com"
                                    className="p-3 text-xs outline-none rounded-lg border border-indigo-200"
                                />
                            </div>

                            {/* Application Link */}
                            <div className="grid gap-2">
                                <label className="font-bold text-sm text-slate-700">
                                    Application Link
                                </label>
                                <input
                                    type="url"
                                    name="application_link"
                                    placeholder="https://company.com/careers"
                                    className="p-3 text-xs outline-none rounded-lg border border-indigo-200"
                                />
                            </div>

                            {/* Deadline */}
                            <div className="grid gap-2">
                                <label className="font-bold text-sm text-slate-700">
                                    Application Deadline *
                                </label>
                                <input
                                    type="date"
                                    name="application_deadline"
                                    required
                                    className="p-3 text- w-full outline-none rounded-lg border border-indigo-200"
                                />
                            </div>

                            {/* Contact Person */}
                            <div className="grid gap-2">
                                <label className="font-bold text-sm text-slate-700">
                                    Contact Person
                                </label>
                                <input
                                    type="text"
                                    name="contact_person"
                                    placeholder="e.g. Human Resource Manager"
                                    className="p-3 text-xs outline-none rounded-lg border border-indigo-200"
                                />
                            </div>

                            {/* Contact Phone */}
                            <div className="grid gap-2">
                                <label className="font-bold text-sm text-slate-700">
                                    Contact Phone
                                </label>
                                <input
                                    type="tel"
                                    name="contact_phone"
                                    placeholder="e.g. +254 7XX XXX XXX"
                                    className="p-3 text-xs outline-none rounded-lg border border-indigo-200"
                                />
                            </div>

                            {/* Required Documents */}
                            <div className="grid gap-2 md:col-span-2">
                                <label className="font-bold text-sm text-slate-700">
                                    Required Documents
                                </label>
                                <textarea
                                    name="required_documents"
                                    rows="3"
                                    placeholder="e.g. Updated CV, Cover Letter, Academic Certificates..."
                                    className="p-3 text-xs outline-none rounded-lg border border-indigo-200"
                                />
                            </div>

                            {/* Application Instructions */}
                            <div className="grid gap-2  md:col-span-2">
                                <label className="font-bold text-sm text-slate-700">
                                    Application Instructions
                                </label>
                                <textarea
                                    name="application_instructions"
                                    rows="4"
                                    placeholder="Provide additional instructions for applicants..."
                                    className="p-3 text-xs outline-none rounded-lg border border-indigo-200"
                                />
                            </div>

                        </div>
                    </div>

                    {/* Submit Job */}
                    <div className="bg-white/70 z-50 backdrop-blur-md sticky lg:static bottom-20   p-4 rounded-xl border border-indigo-100 flex flex-col sm:flex-row items-center justify-between gap-4">

                        <p className="text-xs text-slate-500">
                            Please review all job details before publishing.
                        </p>

                        <div className="flex items-center gap-3 w-full sm:w-auto">
                            <button
                                type="button"
                                className="px-5 py-3 rounded-lg border border-indigo-200 text-indigo-600 text-xs font-semibold hover:bg-indigo-50 transition w-full sm:w-auto"
                            >
                                Save Draft
                            </button>

                            <button
                                type="submit"
                                className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-semibold shadow-md shadow-indigo-200 hover:shadow-lg hover:from-blue-700 hover:to-indigo-700 transition w-full sm:w-auto"
                            >
                                Publish Job →
                            </button>
                        </div>

                    </div>






                </form>

            </div>

        </section>
    )
}

export default CreateJob