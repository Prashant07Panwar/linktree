"use client"
import React, { useEffect } from 'react'
import { useState } from 'react'
import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
// import toasting from 'react-hot-toast';


const Page = () => {
  const [useremail, setuseremail] = useState("")
  const [vemail, setvemail] = useState(false)
  const [index, setindex] = useState(0)
  const [displaypwd, setdisplaypwd] = useState(false)
  const [userpassword, setuserpassword] = useState("")
  const [evalid, setevalid] = useState(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
  const [display1, setdisplay1] = useState(true)
  const [display2, setdisplay2] = useState(false)
  const [backupemail, setbackupemail] = useState("")
  const [validusername, setvalidusername] = useState(false)
  const [username, setusername] = useState("")
      
const router = useRouter()

  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: { errors,isSubmitting },
  } = useForm()

  const onpwd=(data)=>{
    setuserpassword(data.password)
  }

const onsub1 =(data)=>{
  if(data.email && data.password==null){
    setuseremail(data.email)
  setbackupemail(data.email)
  }
  if(data.password && data.email){
    setuserpassword(data.password)
    setuseremail(data.email)
  }
}


//  const verification=async(data)=>{
//         const myHeaders = new Headers();
//         myHeaders.append("Content-Type", "application/json");
//         const raw = JSON.stringify(data);
//         
//         const requestOptions = {
//           method: "POST",
//           headers: myHeaders,
//           body: raw,
//           redirect: "follow"
//         };
//         const r = await fetch("http://localhost:3000/api/sign", requestOptions)
//         const d = await r.json()
//        
//         setvemail(d.vemail)
//         setvbutton(d.vbutton)
//         setindex(d.index)}
       
    
 const onsubmit = async(data)=>{
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
   
  setvemail(d.vemail)
  setindex(d.index)
  setuseremail("")
  setuserpassword("randompassword")
  setdisplaypwd(d.success)
  setdisplay1(d.display1)
  setdisplay2(d.display2)
 }

//  const onsubmit1 = async(data)=>{
//   const myHeaders = new Headers();
//   myHeaders.append("Content-Type", "application/json");
//   const raw = JSON.stringify(data);
//  
//   const requestOptions = {
//     method: "POST",
//     headers: myHeaders,
//     body: raw,
//     redirect: "follow"
//   };
//   const r = await fetch("http://localhost:3000/api/sign1", requestOptions)
//   const d = await r.json()
//  
//   setvalidusername(d.validusername)
// }

const onsubmit3 =async(data)=>{
  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  const raw = JSON.stringify({
    "email":backupemail,
    "password":userpassword,
    "username":data.username
  });

  const requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow"
  };
  const r = await fetch("http://localhost:3000/api/sign1", requestOptions)
  const d = await r.json()

  if(d.saving){
    toast("Please wait a moment...signing you in",{style:{
      width:"25vw",
      height:"15vh",
      border:"20px",
      backgroundColor:"#a82b96db",
      color:"white",
      fontWeight:"extrabold",
      fontSize:"20px"
     },position:"top-center"});
   setTimeout(() => {
    router.push("/")
   }, 6000);
  }
  setvalidusername(d.validity)
}

// useEffect(()=>{
//     verification()
// }, [username])


// const onsubmit = async(data)=>{
//     const myHeaders = new Headers();
//     myHeaders.append("Content-Type", "application/json");
//    
//     const raw = JSON.stringify(data);
//     
//     const requestOptions = {
//       method: "POST",
//       headers: myHeaders,
//       body: raw,
//       redirect: "follow"
//     };
    
//     const r = await fetch("http://localhost:3000/api/login", requestOptions)
//     const res = await r.json()
//    
//     if(res.success){
//         router.push(`/?admin=${true}`)
//     }   
//     setresultuser(res.successuser)
//     setresultpassword(res.successpassword)

// }
    return (
    <div className='grid grid-cols-2 min-h-screen  items-start'>
      <div className='flex absolute top-10 left-10'><Link href={"/"}><span className='text-3xl font-bold text-black'>Linktree</span><svg className='absolute left-[52px] top-[15px]'><path d="M65.7852 5.33374H69.6615L66.9058 2.70668L68.4306 1.13901L71.0577 3.83956V0H73.3357V3.83956L75.9627 1.14513L77.4863 2.70668L74.7319 5.32762H78.607V7.49541H74.7098L77.4827 10.1898L75.9627 11.7208L72.1967 7.93631L68.4306 11.7208L66.9058 10.196L69.6798 7.50153H65.7852V5.33374ZM71.0515 10.6062H73.3296V15.7502H71.0515V10.6062Z" fill="#43E660"></path></svg></Link></div>
    {display1 && <form action={""} onChange={handleSubmit(onsub1)} onSubmit={handleSubmit(onsubmit)}  className='flex flex-col mt-[25vh] justify-center items-center gap-5'>
      <p className='text-7xl font-extrabold'>Join Linktree</p>
      <p className='text-lg text-bg-[ #676b5f.]'>Sign up for free!</p>
     
     
      <input type='text'  {...register("email",{required:{value:true,message:"Username is required"}})} placeholder='Enter Username or Email' className={`relative z-[1] rounded-md focus:outline-[#F6F7F5] w-2/3  h-12 mt-2 mb-[2px] px-2 shadow-md shadow-slate-600  bg-[#F6F7F5] `}/>
     <svg className={`absolute top-[46vh] right-[58vw] z-[${index}]`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" fill='#013220' height="24px" fontWeight="bold" fontSize="10"><path  d="M 12 2 C 6.4889941 2 2 6.4889982 2 12 C 2 17.511002 6.4889941 22 12 22 C 17.511006 22 22 17.511002 22 12 C 22 6.4889982 17.511006 2 12 2 z M 12 4 C 16.430126 4 20 7.5698765 20 12 C 20 16.430123 16.430126 20 12 20 C 7.5698737 20 4 16.430123 4 12 C 4 7.5698765 7.5698737 4 12 4 z M 15.980469 8.9902344 A 1.0001 1.0001 0 0 0 15.292969 9.2929688 L 11 13.585938 L 8.7070312 11.292969 A 1.0001 1.0001 0 1 0 7.2929688 12.707031 L 10.292969 15.707031 A 1.0001 1.0001 0 0 0 11.707031 15.707031 L 16.707031 10.707031 A 1.0001 1.0001 0 0 0 15.980469 8.9902344 z"/></svg>
   
      {errors.email && <div className='text-red-800 w-2/3 font-semibold text-lg '>{errors.email.message}</div>}
      {vemail && <div className='text-red-800 w-2/3 font-semibold flex text-lg justify-center'>Email already taken</div>}
    
     {displaypwd &&  <input type='password' {...register("password",{required:{value:true,message:"Please enter a password"},minLength:{value:8,message:'Password should be atlest 8 characters long'},maxLength:{value:64,message:"Password cannot be longer than 64 characters"}})} placeholder='Enter Password' className={`relative z-[1] rounded-md focus:outline-[#F6F7F5] w-2/3  h-12 mt-2 mb-[2px] px-2 shadow-md shadow-slate-600  bg-[#F6F7F5] `}/>}
     {errors.password && <div className='text-red-800 w-2/3 text-lg font-semibold flex justify-start'>{errors.password.message}</div>}
      
      
      <button className='bg-[#8129D9] text-white font bold text-2xl rounded-full px w-2/3 py-2 shadow-md shadow-purple-900 hover:shadow-lg hover:shadow-purple-900 disabled:bg-[#E0E2DD] disabled:shadow-none' disabled={(evalid.test(useremail)?false:true) || (userpassword.length>=64 && userpassword.length<=8) }>{(displaypwd==false)?"Continue":"Create Account"}</button>
    
    
    <div className='flex flex-col gap-y-1 w-2/3 text-md text-slate-500'>
    <div className='flex gap-x-2 items-center'><span>By clicking</span><span className='text-slate-700 font-semibold'>Create account</span><span>You agree to Linktree's privacy notice, T&Cs and to</span></div>
    <span className='text-slate-500'>receive offers, news and updates.</span>
    </div>
    
    <div className='my-4 text-3xl text-gray-400'>OR</div>
    <div className='flex justify-center gap-1 text-[#676b5f] text-xl'><span>Already have an account?</span><Link href={"/loginuser"} className='underline decoration-[#8129D9] text-[#8129D9] text-xl'>Log in</Link></div>
    </form>}

    {display2 && <div className='flex flex-col items-start mt-[30vh] gap-10  mx-16'>
      <p className='text-6xl font-bold'>Choose your username</p>
      <p className='text-xl text-slate-500'>Claim your free Link in Bio</p>
      <form className='w-full flex flex-col gap-y-8 my-6' action=""  onSubmit={handleSubmit(onsubmit3)}>
        <input type="text" className='w-full border-[#006100] border-2 py-4 px-2 rounded-md  focus:outline-[#F6F7F5]  h-12 mt-2 mb-[2px] shadow-md shadow-slate-600  bg-[#F6F7F5]' {...register("username",{required:{value:true,message:"Please enter username"},maxLength:{value:15,message:"username should not contain more than 8 characters"}})}/>
        {errors.username && <div>{errors.username.message}</div>}
        {validusername && <div>Username is taken</div>}
        
       <button className='w-full py-3 px-2 font-bold text-xl rounded-full shadow-md shadow-slate-900 hover:shadow-lg hover:shadow-slate-950 text-white bg-[#8129d9] hover:bg-purple-900'>Continue</button>
      </form>
      </div> }

    <div>
      <img className='h-[120vh] w-full object-cover' src="https://assets.production.linktr.ee/auth/2174/media/banner-register-social-desktop.5099568a6eddc615695e.png" alt="" /></div>
    <ToastContainer />
    </div>
    
  )
}

export default Page
