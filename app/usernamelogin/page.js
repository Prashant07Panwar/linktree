"use client"
import React from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
const Page = () => {

const [validusername, setvalidusername] = useState(false)
  const [username, setusername] = useState("")

const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onsub2 =(data)=>{
    setusername(data.username)
  }
  
  const onsubmit1 = async(data)=>{
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    const raw = JSON.stringify(data);
    
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };
    const r = await fetch("http://localhost:3000/api/sign1", requestOptions)
    const d = await r.json()
   
    setvalidusername(d.validusername)
  
  }
  return (
      <section className='grid grid-cols-2 min-h-screen'>
        <div className='flex flex-col items-center'>
      <div className='flex flex-col items-start mt-[30vh] gap-10  mx-12'>
      <p className='text-6xl font-bold'>Choose your username</p>
      <p className='text-xl text-slate-500'>Claim your free Link in Bio</p>
      <form className='w-full flex flex-col gap-y-8 my-6' action="" onChange={handleSubmit(onsub2)} onSubmit={handleSubmit(onsubmit1)}>
        <input type="text" className='w-full  border-2 py-4 px-2   rounded-md focus:outline-[#F6F7F5]  h-12 mt-2 mb-[2px] shadow-md shadow-slate-600  bg-[#F6F7F5] ' {...register("username",{required:{value:true,message:"Please enter username"},maxLength:{value:15,message:"username should not contain more than 8 characters"}})}/>
        {errors.username && <div>{errors.username.message}</div>}
        {validusername && <div>Username is taken</div>}
        
       <button className='w-full py-3 px-2 font-bold text-xl rounded-full shadow-md shadow-slate-900 hover:shadow-lg hover:shadow-slate-950 text-white bg-[#8129d9] hover:bg-purple-900'>Continue</button>

      </form>
      </div>
      </div>

      <div className='bg-red-400'>fhruihdfuh</div>
      </section>
  )
}

export default Page
