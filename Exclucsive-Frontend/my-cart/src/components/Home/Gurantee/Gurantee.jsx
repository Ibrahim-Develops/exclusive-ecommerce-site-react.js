import React from 'react'
import { TbTruckDelivery } from "react-icons/tb";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { AiOutlineSafetyCertificate } from "react-icons/ai";

const Gurantee = () => {
  return (
    <>
        <div className='mx-52 mt-[112px] mb-28 m-auto flex justify-around'>
            <div className='flex flex-col justify-center items-center'>
                <div className='rounded-full bg-gray-300 w-20 h-20 flex justify-center items-center mb-5'>
                    <span className='rounded-full bg-black w-14 h-14 flex justify-center items-center'><TbTruckDelivery className='text-white text-4xl'/></span>
                </div>
                <h1 className='font-bold'>FREE AND FAST DELIVERY</h1>
                <p className='text-sm'>Free delivery for all orders over $140</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <div className='rounded-full bg-gray-300 w-20 h-20 flex justify-center items-center mb-5'>
                    <span className='rounded-full bg-black w-14 h-14 flex justify-center items-center'><TfiHeadphoneAlt className='text-white text-4xl'/></span>
                </div>
                <h1 className='font-bold'>24/7 CUSTOMER SERVICE</h1>
                <p className='text-sm'>Friendly 24/7 customer support</p>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <div className='rounded-full bg-gray-300 w-20 h-20 flex justify-center items-center mb-5'>
                    <span className='rounded-full bg-black w-14 h-14 flex justify-center items-center'><AiOutlineSafetyCertificate className='text-white text-4xl'/></span>
                </div>
                <h1 className='font-bold'>MONEY BACK GURANTEE</h1>
                <p className='text-sm'>We return money within 30 days</p>
            </div>
        </div>
    </>
  )
}

export default Gurantee