"use client";
import { ChevronsLeft } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

const Navbar = () => {

  const router = useRouter();
  return (
    <div className='p-4'>
      <div className='bg-[#76250E] fixed z-50 rounded-full w-16 h-16 items-center justify-center flex'>
        <ChevronsLeft onClick={() => router.back()} className='text-white text-4xl font-bold cursor-pointer'/>
      </div>
    </div>
  )
}

export default Navbar