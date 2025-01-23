"use client"
import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useSearchParams } from "next/navigation";
import Link from "next/link";


export default function Home() {
  const [handlename, sethandlename] = useState("")
  const router = useRouter()
  const searchparams = useSearchParams()
  if(searchparams.get('admin')==true){
    toast.success(searchparams.get('message'))
  }
  console.log(searchparams.get('message'),searchparams.get('admin'))
 const {
     register,
     handleSubmit,
     watch,
     setError,
     formState: { errors,isSubmitting },
   } = useForm()
  const onsubmit = (data)=>{
    router.push(`/${data.handle}`)
  }
  const redirect=()=>{
    router.push(`/generate?handle=${handlename}`)
  }
  return (
    <main>
      <section className="bg-[#254f1a] min-h-screen grid grid-cols-2">
        <div className="flex flex-col justify-center  ml-[10vw] mt-16 gap-2">
        <p className="text-yellow-300 font-bold text-5xl">Everything you </p>
      <p className="text-yellow-300 font-bold text-5xl">are. In one,</p>
      <p className="text-yellow-300 font-bold text-5xl">simple link in bio.</p>
      <p className="text-yellow-300 text-xl my-4">Join 50M+ people using Linktree for their link in bio. One link to help you share everything you create, curate and sell from your Instagram, TikTok, Twitter, YouTube and other social media profiles.</p>
      <div className="input flex flex-col mt-4 gap-y-4">
        <div className="flex gap-2">
        <input value={handlename} onChange={(e)=>{sethandlename(e.target.value)}} className="px-2 py-2 font-semibold focus:outline-green-800 rounded-md shadow-md shadow-slate-950  hover:shadow-lg hover:shadow-slate-950" type="text" placeholder="Enter your Handle" />
        <button onClick={redirect} className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full px-4 py-4 font-semibold shadow-md shadow-slate-950  hover:shadow-lg hover:shadow-slate-950">Claim your Bittree</button>
        </div>

        <form action="" onSubmit={handleSubmit(onsubmit)} className="flex gap-2">
        <input {...register("handle",{required:{value:true,message:"Please enter your handle"}})} className="px-2 py-2 font-semibold focus:outline-green-800 rounded-md shadow-md shadow-slate-950  hover:shadow-lg hover:shadow-slate-950" type="text" placeholder="Enter Handle" />
        {errors.handle && <span className="text-lg text-black font-semibold">{errors.handle.message}</span>}
        <button onClick={redirect} className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-full px-4 py-4 font-semibold shadow-md shadow-slate-950  hover:shadow-lg hover:shadow-slate-950">Go to your handle</button>
        </form>

      </div>
        </div>
        <div className="flex items-end justify-center flex-col mr-[10vw] mt-16"><img className="pt-8 img1 relative z-1" src="/home.png" alt="" /></div>
      </section>
      <section className="bg-[#7A0016] min-h-screen grid grid-cols-2">
        <div className="flex flex-col gap-2 items-start justify-center ml-[10vw]">
          <p className="text-5xl font-bold text-[#E9C0E8]">Share your linktree</p>
          <p className="text-5xl font-bold text-[#E9C0E8]">form your instagram,</p>
          <p className="text-5xl font-bold text-[#E9C0E8]">tiktok,twitter and</p>
          <p className="text-5xl font-bold text-[#E9C0E8]">other bios</p>
         <div className="my-4">
         <p className="text-xl text-[#E9C0E8]">Add your unique Linktree URL to all the platforms and places you</p>
         <p className="text-xl  text-[#E9C0E8]">find your audience. Then use your QR code to drive your offline traffic online.</p>
         </div>
        </div>
        <div className="flex justify-center flex-col mr-[10vw] mt-16"><img src="\lt.png" className="img2" alt="huhihhuiuh" />
        </div>
      </section>
      <section className="min-h-screen grid grid-cols-2 bg-[#e9c0e9] ">
        <div className="mt-28 pt-14 ml-16 flex justify-end animate-bounce"><img src="\layout.jpg" alt="" /></div>
        <div className="flex flex-col mx-8 justify-center items-start mr-[10vw]">
          <p className="text-7xl font-extrabold text-[#502274]">Good company</p>
          <p className="text-[#502274] pt-8 font-semibold text-lg">Sign up for the same link in bio tool that 50M+ of your favorite creators,</p>
          <p className="text-[#502274] font-semibold text-lg">musicians, influencers and brands use to keep growing.</p>
          <Link href="/signup" className='bg-[#502274] rounded-full text-lg py-2 px-16 my-12 text-white font-semibold'>Sign up for free</Link>
        </div>
      </section>
      <ToastContainer/>
    </main>
  );
}
