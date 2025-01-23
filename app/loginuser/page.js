"use client"
import React, { useEffect, useRef } from 'react'
import { useState } from 'react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
// import { useSession, signIn, signOut } from "next-auth/react"


const page = () => {
  // const { data: session } = useSession()
  const [username, setusername] = useState("")
  const [password, setpassword] = useState("")
  const [resultuser, setresultuser] = useState(false)
  const [resultpassword, setresultpassword] = useState(false)
  const [loginsuccess, setloginsuccess] = useState()
  // const [navigate, setnavigate] = useState(false)
  // const [exp, setexp] = useState(false)
const router = useRouter()


// console.log(session)
// console.log(navigate,exp)
 
// useEffect(() =>{ 
//  if(session!=null){ console.log("session")}
// }, [navigate,exp])


const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors,isSubmitting },
  } = useForm()
const onsubmit = async(data)=>{
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    // console.log(data) 
    const raw = JSON.stringify(data);
    // console.log(raw)
    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };
    
    const r = await fetch("http://localhost:3000/api/login", requestOptions)
    const res = await r.json()
    // console.log(res)
    if(res.success){
     router.push("/api/logged")
    }
    toast.error(res.message,{position:'top-center',style:{
      width:"25vw",
      height:"10vh",
      border:"20px",
      backgroundColor:"white",
      filter:"opacity(.7)",
      fontWeight:"extrabold",
      fontSize:"20px",
      color:"black"
    }})  
    setresultuser(res.successuser)
    setresultpassword(res.successpassword)
} 


    return (
    <div className='grid grid-cols-2 min-h-screen bg-gradient-to-r from-stone-500 to-stone-300'>
    <form action={""} onSubmit={handleSubmit(onsubmit)} className='flex flex-col bg-gradient-to-r from-fuchsia-100 to-fuchsia-200 justify-center items-center' >
      <div className='flex absolute top-10 left-10'><Link href={"/"}><span className='text-3xl font-bold text-black'>Linktree</span><svg className='absolute left-[52px] top-[15px]'><path d="M65.7852 5.33374H69.6615L66.9058 2.70668L68.4306 1.13901L71.0577 3.83956V0H73.3357V3.83956L75.9627 1.14513L77.4863 2.70668L74.7319 5.32762H78.607V7.49541H74.7098L77.4827 10.1898L75.9627 11.7208L72.1967 7.93631L68.4306 11.7208L66.9058 10.196L69.6798 7.50153H65.7852V5.33374ZM71.0515 10.6062H73.3296V15.7502H71.0515V10.6062Z" fill="#43E660"></path></svg></Link></div>
      <p className='text-4xl font-bold'>Welcome back!</p>
      <p className='text-xl'>Link to your linktree</p>
      <input type='text' {...register("username",{required:{value:true,message:"Username is required"}})} placeholder='Enter Username ' className='rounded-md focus:outline-[#F6F7F5] w-2/3 h-12 my-2 px-2 shadow-md shadow-slate-600   bg-[#F6F7F5]'/>
      {errors.username && <div className='text-red-800 d'>{errors.username.message}</div>}
      {resultuser && <div className='text-red-800 '>Username not found</div>}
      <input type='password' {...register("password",{required:{value:true,message:"Password is required"}})} placeholder='Enter Password' className='rounded-md w-2/3 h-12 shadow-md shadow-slate-600 my-2 focus:outline-[#F6F7F5] bg-[#F6F7F5] px-2 '/>
      {errors.password && <div className='text-red-800 '>{errors.password.message}</div>}
      {resultpassword && <div className='text-red-800'>Password is incorrect</div>}
      <button className='bg-[#8129D9] text-white font bold text-2xl rounded-full px w-2/3 py-2 shadow-md shadow-purple-900 hover:shadow-lg hover:shadow-purple-900'>Continue</button>
    <div className='my-4 text-3xl text-gray-400'>OR</div>
    {/* {(session==null)?<div className='flex flex-col'><button onClick={() =>{setexp(!exp); setnavigate(!navigate)}}>Sign in using Github</button>
      <button onClick={() => signIn("google")}>Sign in using Google</button></div>:<button onClick={()=>{signOut('github')}}>yo</button>} */}
    <div className='flex mt-6 justify-center items-center gap-[2px]'><Link href="/reset" className='underline decoration-[#8129D9] text-[#8129D9] text-lg'>forgot password?</Link><span className='relative bottom-[10px] font-bold text-4xl text-black'>.</span><Link href="/reset" className='underline decoration-purple-500 text-[#8129D9] text-lg'>Forgot username?</Link></div>
    <div className='flex justify-center gap-1 text-[#676b5f]'><span>Don't have an account?</span><Link href={"/signup"} className='underline decoration-[#8129D9] text-purple'>Sign up.</Link></div>
    </form>
    <div><img className='h-[120vh] w-full object-cover' src="/login.png" alt="" /></div>
    <ToastContainer/>
    </div>
    
  )
}

export default page
