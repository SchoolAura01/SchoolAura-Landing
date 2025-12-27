"use client"
import React from 'react'
import { Icon } from "@iconify/react";
const GetStart = ({ className = "" }) => {
  return (
    <button type="button" className={`${className} text-white bg-[#000000] hover:bg-[#000000]/80 focus:ring-4 focus:outline-none box-border border border-transparent font-medium leading-5 rounded-full text-xs 2xl:text-base px-2 md:px-4 py-1 2xl:py-2 text-center inline-flex items-center
    `}>
Get Started
<Icon icon="tabler:arrow-right" width="20" height="20"  className="text-white ml-1.5" />
</button>
  )
}

export default GetStart