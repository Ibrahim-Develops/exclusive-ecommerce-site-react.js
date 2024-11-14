import React from 'react'
import AppStore from './AppStore.png'
import GooglePlay from './GooglePlay.png'
import QrCode from './QrCode.png'
import { GoPaperAirplane } from "react-icons/go";
import { RiFacebookLine } from "react-icons/ri";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { RiLinkedinLine } from "react-icons/ri";
import { MdOutlineCopyright } from "react-icons/md";

const Footer = () => {
  return (
    <>
        <div className='bg-black w-full h-[25rem] text-white flex justify-around pt-20'>
            <div className='flex flex-col gap-4'>
                <h1 className='text-xl font-bold'>Exclusive</h1>
                <p>Subscribe</p>
                <p>Get 10% Off your first order</p> 
                <span className='flex border-[1px] rounded items-center'>
                    <input className='bg-black ps-2 outline-none' type="text" placeholder='Enter your email' name="" id="" />
                    <span className='pe-2 py-3'><GoPaperAirplane /></span>
                </span>
            </div>
            <div className='flex flex-col gap-4 w-[190px]'>
                <h1 className='text-xl font-bold'>Support</h1>
                <p>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</p>
                <p>exclusive@gmail.com</p>
                <p>+88015-88888-9999</p>
            </div>
            <div className='flex flex-col gap-4'>
                <h1 className='text-xl font-bold'>Account</h1>
                <p>My Account</p>
                <p>Login / Register</p>
                <p>Cart</p>
                <p>Wishlist</p>
                <p>Shop</p>
            </div>
            <div className='flex flex-col gap-4'>
                <h1 className='text-xl font-bold'>Quick Link</h1>
                <p>Privacy Policy</p>
                <p>Terms Of Use</p>
                <p>FAQ</p>
                <p>Contact</p>
            </div>
            <div className='flex flex-col gap-4'>
                <h1 className='text-xl font-bold'>Dowload App</h1>
                <p className='text-sm text-gray-400 -mb-3'>Save $3 with App New User Only</p>
                <div className=''>
                    <span className='flex justify-center items-center gap-2'>
                        <img src={QrCode} className='w-20 h-20' alt="" />
                        <span className=''>
                            <img src={GooglePlay} className='w-28 h-[45px]' alt="" />
                            <img src={AppStore} className='w-28 h-[40px]' alt="" />
                        </span>
                    </span>
                    <span className='flex mt-5 text-xl justify-between w-[80%]'>
                    <RiFacebookLine />
                    <CiTwitter />
                    <FaInstagram />
                    <RiLinkedinLine />
                    </span>
                </div>
            </div>
        </div>   
        <div className='flex justify-center items-center gap-2 text-md h-16 border-t-[0.1px] border-gray-900 w-full bg-gray-950 text-gray-100 text-opacity-20'><MdOutlineCopyright /> Copyright Rimel 2024. All right reserved</div>
    </>
  )
}

export default Footer