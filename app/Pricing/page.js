import React from 'react'
import Link from 'next/link'

const page = () => {
  return (
   <>
    <section className="bg-[#502274] min-h-screen grid grid-cols-2">
        <div className="flex flex-col gap-[1px] items-start justify-center ml-[10vw]">
          <p className="text-7xl font-extrabold text-[#e9c0e9]">The best link in</p>
          <p className="text-7xl font-extrabold text-[#e9c0e9]">bio tool for</p>
          <p className="text-7xl font-extrabold text-[#e9c0e9]">Instagram</p>  
         <div className="my-4">
         <p className="text-xl text-[#e9c0e9]">Join the 50M+ creators, musicians, influencers and brands using Linktree to share content and grow audiences with one simple link.</p>
         </div>
         <Link href="/signup" className='bg-[#d2e823] rounded-full text-lg py-2 px-16'>Sign up for free</Link>
        </div>
        <div className="flex justify-center flex-col mr-[10vw] mt-16"><img src="\template.webp" className="" alt="huhihhuiuh" />
        </div>
      </section>
      <section className='flex flex-col items-center min-h-screen bg-slate-200'>
        <p className='pt-24 pb-8 text-7xl font-extrabold text-black'>Get more with Linktree</p>
        <p className='text-xl font-semibold text-black'>Help your followers discover, enjoy and support everything you have to offer when you add</p>
        <p className='text-xl font-semibold text-black'>Linktree’s ‘Link In Bio’ to your Instagram today.</p>
        <Link href="/signup" className='bg-[#e9c0e9] rounded-full font-semibold text-lg py-2 px-16 my-8'>Sign up for free</Link>
        <div className='flex gap-6 my-2'>
            <div className='flex flex-col px-2 items-start justify-center rounded-3xl w-[20vw] bg-[#e9c0e9]'>
                <img src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/66996301885721c14a1dc6d3_feature-7.avif-p-500.png" alt="" className='w-full'/>
                <p className='text-3xl text-[#502274] pl-2 font-bold py-2'>More Clicks</p>
                <p className=' text-[#502274] pl-2  font-semibold'>Get more clicks on your content-from</p>
                <p className=' text-[#502274] pl-2 font-semibold'>blog posts to your social and everything in</p>
                <p className=' text-[#502274] pl-2 font-semibold'>between</p>
                <div className='flex gap-1 pl-2 py-2'>
                    <button className='px-4 py-2 rounded-full  border-[1px] border-slate-600 text-slate-500 font-semibold'>Free</button>
                    <button className='px-4 py-2 rounded-full border-[1px] border-slate-600 text-slate-500 font-semibold'>Premium</button>
                    <button className='px-4 py-2 rounded-full border-[1px] border-slate-600 text-slate-500 font-semibold'>Pro</button>
                    <button className='px-4 py-2 rounded-full border-[1px] border-slate-600 text-slate-500 font-semibold'>Starter</button>
                </div>
            </div>
            <div className='flex flex-col px-2 items-start justify-center rounded-3xl w-[20vw] bg-[#d2e823]'>
                <img src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/669963018e72dd909fdb80a3_feature-5.avif-p-500.webp" alt="" className='w-full'/>
                <p className='text-3xl text-[#4c2e05] pl-2 font-bold py-2'>More Clicks</p>
                <p className=' text-[#4c2e05] pl-2  font-semibold'>Get more clicks on your content-from</p>
                <p className=' text-[#4c2e05] pl-2 font-semibold'>blog posts to your social and everything in</p>
                <p className=' text-[#4c2e05] pl-2 font-semibold'>between</p>
                <div className='flex gap-1 pl-2 py-2'>
                    <button className='px-4 py-2 rounded-full  border-[1px] border-slate-600 text-slate-500 font-semibold'>Free</button>
                    <button className='px-4 py-2 rounded-full border-[1px] border-slate-600 text-slate-500 font-semibold'>Premium</button>
                    <button className='px-4 py-2 rounded-full border-[1px] border-slate-600 text-slate-500 font-semibold'>Pro</button>
                    <button className='px-4 py-2 rounded-full border-[1px] border-slate-600 text-slate-500 font-semibold'>Starter</button>
                </div>
            </div>
            <div className='flex flex-col px-2 items-start justify-center rounded-3xl w-[20vw] bg-[#780016]'>
                <img src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/66996301794f1f7749d0e15c_feature-8.avif-p-500.webp" alt="" className='w-full'/>
                <p className='text-3xl text-[#e9c0e9] pl-2 font-bold py-2'>More Clicks</p>
                <p className=' text-[#e9c0e9] pl-2  font-semibold'>Get more clicks on your content-from</p>
                <p className=' text-[#e9c0e9] pl-2 font-semibold'>blog posts to your social and everything in</p>
                <p className=' text-[#e9c0e9] pl-2 font-semibold'>between</p>
                <div className='flex gap-1 pl-2 py-2'>
                    <button className='px-4 py-2 rounded-full  border-[1px] border-white text-white font-semibold'>Free</button>
                    <button className='px-4 py-2 rounded-full border-[1px] border-white text-white font-semibold'>Premium</button>
                    <button className='px-4 py-2 rounded-full border-[1px] border-white text-white font-semibold'>Pro</button>
                    <button className='px-4 py-2 rounded-full border-[1px] border-white text-white font-semibold'>Starter</button>
                </div>
            </div>
        </div>
        <div className='flex items-center justify-center min-h-screen'>
        <div className='w-1/2'>
            <div><img src="https://cdn.prod.website-files.com/666255f7f2126f4e8cec6f8f/66996301a36cb51c292b0668_Container-p-800.webp" className='w-fit' alt="" /></div>
        </div>
        <div className='flex flex-col items-start'>
            <p className='font-extrabold text-6xl text-black'>More data, more growth</p>
            <p className='font-semibold text-black pt-4 text-lg'>Track your clicks, measure click-through rates and analyze conversions to</p>
            <p className='font-semibold text-lg text-black'>make data-driven decisions that increase engagement and sales</p>
            <Link href="/signup" className='bg-[#e9c0e9] rounded-full text-lg py-2 px-16 my-12 font-semibold'>Sign up for free</Link> 
        </div>
        </div>
      </section>
   </>
      
  )
}

export default page
