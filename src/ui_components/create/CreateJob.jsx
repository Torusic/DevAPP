import React from 'react'

function CreateJob() {
  return (
    <section className='bg-indigo-50 min-h-screen  rounded-2xl p-2'>
        <div className='max-w-7xl w-full mx-auto p-2 '>
            <div className='grid border-b border-b-indigo-200 '>
                <h1 className='bg-gradient-to-r from-blue-500 lg:text-xl text-lg   to-pink-600 bg-clip-text text-transparent font-bold text-gradient'>Post a Job Opportunity</h1>
            <span className='text-xs lg:text-lg text-slate-600 ext-gadient mb-4 '>Provide he details below to connect with qualified candidate</span>



            </div>
            <form className='bg-white p-4 mt-2 rounded-lg border border-indigo-200 grid'>
                <div className=''>
                    <h1 className='font-bold text-sm text-slate-700'>1. Basic Information</h1>
                <p className='text-slate-500 text-xs p-2'> Start by introducing job opportunity</p>
                <div className='grid lg:grid-cols-2 md:grid-cols-2'>
                    <div className='grid 2 p-2 my-1'>
                    <label className='font-bold my-2 text-slate-700 text-sm text-gradient'>Job title *</label>
                    <input
                    placeholder='e.g. Junior Software Developer'
                    className='p-2 text-slate-800 text-xs outline-none my-2 rounded-lg border border-indigo-200'
                     type="text" />

                    </div>
                    <div className='grid 2 p-2 my-1'>
                    <label className='font-bold my-2 text-slate-700 text-sm text-gradient'>Company/Organization Name*</label>
                    <input
                    placeholder=' Enter Company name'
                    className='p-2 text-slate-800 text-xs outline-none my-2 rounded-lg border border-indigo-200'
                     type="text" />

                    </div>
                    <div className='grid p-2 my-1'>
                        <label className='font-bold my-2 text-slate-700 text-sm text-gradient' htmlFor="">Job Category</label>
                        <select name="category"
                        required
                        className='border border-indigo-200 text-xs p-2 text-indigo-700 bg-indigo-100 rounded-lg'
                         id="">
                            
                                <option disabled className='p-2 bg-indigo-100 text-xs rounded-lg text-slate-900' value="">Select Category</option>
                                 <option  className='p-2 bg-indigo-100 text-xs rounded-lg text-slate-900' value="">Software Development</option>
                                  <option  className='p-2 bg-indigo-100 text-xs rounded-lg text-slate-900' value="">IT & Netwroking</option>
                                   <option  className='p-2 bg-indigo-100 text-xs rounded-lg text-slate-900' value="">Data & Analytics</option>
                                    <option  className='p-2 bg-indigo-100 text-xs rounded-lg text-slate-900' value="">Cybersecurity</option>
                                    <option  className='p-2 bg-indigo-100 text-xs rounded-lg text-slate-900' value="">UI/UX Design</option>
                                    <option  className='p-2 bg-indigo-100 text-xs rounded-lg text-slate-900' value="">Marketing</option>
                                    <option  className='p-2 bg-indigo-100 text-xs rounded-lg text-slate-900' value="">Business</option>
                                    <option  className='p-2 bg-indigo-100 text-xs rounded-lg text-slate-900' value="">Others</option>

                            
                            
                            
                        </select>
                    </div>
                 <div className='grid'>
                <label className='font-bold my-2 text-slate-700 text-sm text-gradient'>Company Website</label>
                <input
                  type="url"
                  name="company_website"
                  placeholder="https://example.com"
                  className='p-2 text-slate-800 text-xs outline-none my-2 rounded-lg border border-indigo-200'
                />
              </div>

                </div>


                </div>
                

            

            </form>
            
        </div>

    </section>
  )
}

export default CreateJob