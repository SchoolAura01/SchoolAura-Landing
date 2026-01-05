"use client";
import Link from 'next/link';
import React from 'react'

const AppButton = ({src,app,small,link}) => {
  return (
    <Link target='_blank' href={link || ""} className="flex items-center gap-2 bg-black text-white rounded-full px-4 py-2 sm:px-7 sm:py-2.5 hover:bg-neutral-700 transition">
    <img src={src} alt="" className="w-4 sm:w-5 md:w-7 h-auto"/>
    <div className='flex items-start flex-col gap-0'>
        <small className='mb-1 leading-none text-[clamp(0.5rem,2vw,0.6rem)] font-light'>{small}</small>
        <p className='m-0 leading-none text-[clamp(0.65rem,2.5vw,0.875rem)] '>{app}</p>
    </div>
  </Link>
  )
}

export default AppButton