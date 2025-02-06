"use client"
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'


const page = () => {

  const [email, setemail] = useState("Enter your email")
  const [password, setpassword] = useState("")
  const [displayform2, setdisplayform2] = useState(false)
  const [resultemail, setresultemail] = useState(false)
  const [displayform1, setdisplayform1] = useState(true)
  const [quickfix, setquickfix] = useState("")
  const [display3, setdisplay3] = useState(false)
  const router = useRouter()

  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors,isSubmitting },
  } = useForm()
 const submitform1=async(data)=>{
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    setemail(data.email)
    const raw = JSON.stringify(data);
    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };
      let r = await fetch("/api/reset", requestOptions);
      let d = await r.json()
      
      setresultemail(d.successemail)
      setdisplayform2(d.displayform2)
      setdisplayform1(d.displayform1)
 }

 const submitform2=async(data)=>{
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const raw = JSON.stringify({
    "email":email,
    "password":data.password,
  });
  const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    let r = await fetch("/api/reset", requestOptions);
    let d = await r.json()
    
    if(d.success){
      setdisplay3(true)
      setdisplayform2(false)
    }
}

    return (
        <div className='flex flex-col min-h-screen items-center justify-center bg-gradient-to-tl from-slate-500 to-slate-950'>
          {displayform1 && <><form action="" onSubmit={handleSubmit(submitform1)} className='flex flex-col w-1/2 mx-auto gap-2 p-4 rounded-md shadow-md  bg-slate-300 shadow-slate-950'>

<h1 className='text-center text-3xl text-black font-bold'>Forgot your password</h1>
<p className='font-semibold pt-4 pb-4 text-lg'>Please enter your valid Email address</p>
<label className='font-semibold text-lg' htmlFor="pwd">Enter email address</label>
<input className='text-white bg-slate-700 font-semibold rounded-xl px-4 py-2 ' type="email" id="pwd" {...register("email",{required:{value:true}})} placeholder='Enter your email'/>
<button className='w-full rounded-full px-4 py-2 font-semibold text-white text-xl bg-slate-700'>submit</button>
{resultemail && <div className='font-semibold text-lg w-full justify-center flex'>Enter valid email address</div>}
<span className='text-blue-500 underline decoration-blue-500 flex justify-center items-center font-semibold my-4'><Link href="/loginuser" className='text-lg'>Back to Login</Link></span></form></>}


          {displayform2 &&  <><form action="" onSubmit={handleSubmit(submitform2)} className='flex flex-col w-1/2 mx-auto gap-2 p-4 rounded-md shadow-md  bg-slate-300 shadow-slate-950'><h1 className='text-center text-5xl text-black font-bold'>Reset your password</h1>
           <p className='font-semibold pt-4 pb-4 text-2xl'>Enter new password below to change your password</p>
           <label className='font-semibold text-lg' htmlFor="pwd">Enter new password</label>
           <input className='text-black bg-white  font-semibold rounded-md px-4 py-2 ' type="password" id="pwd" {...register("password",{required:{value:true,message:"Enter your password"},maxLength:{value:15,message:"Max length exceeds"},minLength:{value:5,message:"Min length should be 5 characters"}})}/>
           
           <label className='font-semibold text-lg' htmlFor="pwd">Confirm new password</label>
           <input className='text-black bg-white font-semibold rounded-md px-4 py-2 ' type="password" id="pw" value={quickfix} onChange={e=>{setquickfix(e.target.value)}}/>
           
           <button className='bg-slate-700 my-6 text-semibold text-white py-2 px-4 rounded-full'>Reset</button>
           <span className='text-blue-500 underline decoration-blue-500 flex justify-center items-center font-semibold my-4'><Link href="/loginuser">Back to Login</Link></span></form></>}

         {display3 && <div className='flex flex-col w-1/2 mx-auto h-[30vh] gap-5 p-4 rounded-md shadow-md  bg-slate-300 shadow-slate-950'>

<h1 className='text-center text-6xl text-black font-extrabold'>Password reset successfully</h1>
<label className='font-bold text-2xl' htmlFor="pwd">Go back to login</label>
<div className='flex justify-center w-full'><Link href={"/loginuser"} className='rounded-full px-6 py-3 font-bold text-white text-xl bg-slate-500 hover:bg-slate-800 shadow-md shadow-slate-900 hover:shadow-lg'>Login</Link></div>
</div>}
        </div>
       )
    }
export default page
