"use client"
import React from 'react'
import { useParams } from 'next/navigation'
const Page = () => {
   const params = useParams()
  return (
    <div className='flex'>
      <div className='w-[15%] px-4 min-h-screen flex flex-col justify-between bg-[#F3F3F1]'>
     <div className='flex flex-col'>
     <svg className='h-[25px] w-[25px] my-6'><path d="M13.5108 5.85343L17.5158 1.73642L19.8404 4.11701L15.6393 8.12199H21.5488V11.4268H15.6113L19.8404 15.5345L17.5158 17.8684L11.7744 12.099L6.03299 17.8684L3.70842 15.5438L7.93745 11.4361H2V8.12199H7.90944L3.70842 4.11701L6.03299 1.73642L10.038 5.85343V0H13.5108V5.85343ZM10.038 16.16H13.5108V24.0019H10.038V16.16Z" fill="#000000"></path></svg>
      

      <div className='flex items-center   hover:bg-gray-200 cursor-pointer hover:text-purple-600 rounded-md px-2 text-sm'><svg width="15" height="15" viewBox="0 0 24 24" fill="none"><g fill="currentColor"><path d="M24 5.25L0 5.25V3.75L24 3.75V5.25Z"></path><path d="M24 5.3H0V3.8h24v1.5Z"></path><path d="m0 9.5.8-.8h22.4l.8.8v5l-.8.8H.9l-.8-.8v-5Zm1.5.8v3.4h21v-3.4h-21Z"></path><path d="M0 20.3h24v-1.6H0v1.6Z"></path></g></svg>
      <div className='hover:bg-gray-200 cursor-pointer hover:text-purple-600 rounded-md px-2 py-2 text-sm'>Links</div></div>
      
      <div className='flex items-center gap-2  hover:bg-gray-200 cursor-pointer hover:text-purple-600 rounded-md px-2 py-2 text-sm'><svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path fill="currentColor" d="M3.54 0h16.92l.22.37 3.21 5.35.11.18v5.56l-.75.76h-.32v11.03l-.75.75H1.83l-.75-.75V12.22H.75v-.75H0V5.9l.11-.19L3.32.37zM.75 11.47v.75L0 11.47zm.75-3.75v3h6V6.65H9v4.07h6V6.65h1.5v4.07h6V6.31L19.61 1.5H4.4L1.5 6.32zm1.08 4.5V22.5h18.85V12.22z"></path></svg><div>Shop</div></div>
      <div className='flex items-center gap-2 hover:bg-gray-200 cursor-pointer hover:text-purple-500 rounded-md px-2 py-2 text-sm' ><svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path fill="currentColor" d="m9 9.8.8-.7h13.4l.8.7v13.5l-.8.8H9.8l-.8-.8V9.8Zm1.5.8v12h12v-12h-12ZM1.5 9.3c0-4.4 3.4-7.8 7.4-7.8V0C4 0 0 4.2 0 9.3 0 14 3.5 18 8 18.5V17a7.6 7.6 0 0 1-6.5-7.7ZM17.8 8h-1.6A7.5 7.5 0 0 0 9 1.5V0a9 9 0 0 1 8.9 8Z"></path></svg><div>Appearence</div></div>
      <div className='flex items-center gap-2 hover:bg-gray-200 cursor-pointer hover:text-purple-500 rounded-md px-2 py-2 text-sm'><svg width="15" height="15" viewBox="0 0 24 24" fill="none"><g clipPath="url(#a)"><path stroke="currentColor" strokeLinejoin="bevel" strokeWidth="1.499" d="M9.644 18.236H.648V2.245h17.99V11.5"></path><path stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" strokeWidth="1.499" d="M14.885 0v3.745M4.383 0v3.745"></path><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="bevel" strokeWidth="1.613" d="M10.264 11.532h12.922V23.18H10.264V11.532Z"></path><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="bevel" strokeWidth="1.613" d="m10.264 20.951 5.416-5.172s5.752 5.771 6.698 6.726"></path><circle cx="19.441" cy="14.467" r="0.994" fill="currentColor"></circle></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h24v24H0z"></path></clipPath></defs></svg><div>Social Planner</div></div>
      
      
      <div className='flex items-center hover:bg-gray-200 cursor-pointer hover:text-purple-500 rounded-md px-2 text-sm'><svg width="15" height="15" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g><path d="M1.20001 22.8V20.4C1.20001 19.127 1.70572 17.9061 2.6059 17.0059C3.50607 16.1057 4.72697 15.6 6.00001 15.6H10.8C12.0731 15.6 13.2939 16.1057 14.1941 17.0059C15.0943 17.9061 15.6 19.127 15.6 20.4V22.8M16.8 1.35602C17.8325 1.62038 18.7477 2.22086 19.4012 3.06279C20.0547 3.90472 20.4094 4.94021 20.4094 6.00602C20.4094 7.07182 20.0547 8.10731 19.4012 8.94924C18.7477 9.79118 17.8325 10.3917 16.8 10.656M22.8 22.8V20.4C22.7939 19.3406 22.4375 18.313 21.7863 17.4773C21.1352 16.6416 20.2258 16.0449 19.2 15.78M13.2 6.00001C13.2 8.65098 11.051 10.8 8.40001 10.8C5.74905 10.8 3.60001 8.65098 3.60001 6.00001C3.60001 3.34905 5.74905 1.20001 8.40001 1.20001C11.051 1.20001 13.2 3.34905 13.2 6.00001Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"></path></g></svg>
      <div className='hover:bg-gray-200 cursor-pointer hover:text-purple-600 rounded-md px-2 py-2 text-sm'>Audience</div></div>
     <div className='flex items-center hover:bg-gray-200 cursor-pointer hover:text-purple-500 rounded-md px-2 text-sm'> <svg width="15" height="15" viewBox="0 0 24 24" fill="none"><path fillRule="evenodd" fill="currentColor" d="M1.5 10.5 0 12v9.7l1.5 1.5h21l1.5-1.5V2.3L22.5.8h-6l-1.4 1.5v3.4H9L7.4 7.2v3.3h-6Zm15-8.2h6v19.4h-6V2.3ZM15 7.2H9v14.5h6V7.2ZM7.4 12H1.5v9.7h6V12Z"></path></svg>
     <div className='hover:bg-gray-200 cursor-pointer hover:text-purple-600 rounded-md px-2 py-2 text-sm'>Analytics</div></div>
      
     <div className='flex items-center hover:bg-gray-200 cursor-pointer hover:text-purple-500 rounded-md px-2 text-sm'><svg width="15" height="15" viewBox="0 0 24 24" fill="none"><g fill="currentColor"><path d="M12 7.3A4.6 4.6 0 0 0 7.5 12c0 2.5 2 4.7 4.5 4.7s4.5-2.2 4.5-4.7-2-4.7-4.5-4.7ZM9 12a3 3 0 0 1 3-3.2 3 3 0 0 1 3 3.2 3 3 0 0 1-3 3.2A3 3 0 0 1 9 12Z"></path><path d="m0 12.4 5.7 10.2.6.4h11.4l.6-.4L24 12.4v-.8L18.3 1.4l-.6-.4H6.3l-.6.4L0 11.6v.8Zm17.2 9.1H6.8L1.5 12l5.3-9.5h10.4l5.3 9.5-5.3 9.5Z"></path></g></svg>
     <div className='hover:bg-gray-200 cursor-pointer hover:text-purple-600 rounded-md px-2 py-2 text-sm'>Settings</div></div>
     </div>
     <div className='flex flex-col'>
        <div className='bg-white px-2 rounded-xl text-sm font-semibold text-center'>
            <p className='text-font-semibold my-4 font-bold '>Save 25% this New Year!🎉</p>
            <p>Level up your Linktree</p>
            <p>today and save 25% on a</p>
            <p>year of Linktree Pro.</p>
            <p>⏰ Offer ends in 4 days.</p>
            <button className='rounded-full px-6 py-4 w-full bg-purple-600 my-4 text-white'>Try pro now</button>
        </div>
        <div className='rounded-full px-4 py-2'>{params.username}</div>
     </div>
      </div>
      <div className='w-[85%]  min-h-screen bg-red-200'>handle</div>
    </div>
  )
}

export default Page
