import React from 'react'
import { IoChevronDownOutline } from "react-icons/io5";


const TopHeader = () => {
  return (
    <>
       <div className='bg-black text-white h-12 font-thin flex items-center justify-center gap-4 text-sm'>
            <span>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</span>
            <span className='font-bold underline cursor-pointer'>ShopNow</span>
            <span className='flex items-center justify-center gap-2 cursor-pointer ps-40'>English<IoChevronDownOutline className='mt-1'/></span>
       </div>
    </>
  )
}

export default TopHeader