"use client"
import React from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'

const page = () => {
  
    const {handleSubmit,register} = useForm()
    const router = useRouter()
    const submit = async(data)=>{
      router.push(`/${data.search}`)      
    } 
    return (
    <div>
        <section className="bg-[#7A0016] min-h-screen grid grid-cols-2">
        <div className="flex flex-col gap-2 items-start justify-center m-[10vw]">
        <div className='flex flex-col justify-center'>
        <p className='text-[#E9C0E9] font-extrabold text-7xl'>Connect</p>
        <p className='text-[#E9C0E9] font-extrabold text-7xl'>more of you</p>
        <div className='my-6'>
        <p className='text-[#E9C0E9] text-xl'>Bring the best experiences across the internet to one</p>
        <p className='text-[#E9C0E9] text-xl'>place: your Linktree</p>
        </div>
        <form action="" onSubmit={handleSubmit(submit)} className='relative right-5'>
            <button><svg width="20" height="15" className='stroke-slate-400 relative top-[2px] left-[22px]' viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M1.125 8.12445C1.125 4.25846 4.25901 1.12445 8.125 1.12445C11.991 1.12445 15.125 4.25846 15.125 8.12445C15.125 11.9904 11.991 15.1245 8.125 15.1245C4.25901 15.1245 1.125 11.9904 1.125 8.12445ZM8.125 0.124451C3.70672 0.124451 0.125 3.70617 0.125 8.12445C0.125 12.5427 3.70672 16.1245 8.125 16.1245C10.1542 16.1245 12.007 15.3689 13.4173 14.1239L18.3964 19.103L18.75 19.4566L19.4571 18.7495L19.1036 18.3959L14.1244 13.4168C15.3695 12.0064 16.125 10.1537 16.125 8.12445C16.125 3.70617 12.5433 0.124451 8.125 0.124451Z" fill="#111821"></path></svg></button><input type="text" {...register("search")} className='w-[20vw] px-6 py-3 rounded-md font-semibold' placeholder='Search link apps and integrations...'/>
        </form>
        </div>
        </div>
        <div className="flex justify-center flex-col mr-[10vw] mt-16"><img src="\discover.jpg" className="" alt="huhihhuiuh" />
        </div>
      </section>     
    </div>
  )
}

export default page
