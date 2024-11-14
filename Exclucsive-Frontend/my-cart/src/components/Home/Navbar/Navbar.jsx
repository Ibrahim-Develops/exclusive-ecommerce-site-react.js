import React, { useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { LuHeart } from "react-icons/lu";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = ({ setSearchQuery }) => {
  const { Products } = useSelector((state) => state.cart);
  const [activeLink, setActiveLink] = useState('');
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
    setSearchQuery(e.target.value);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  return (
    <div className='sticky top-0 bg-white z-50 flex items-center justify-between ps-28 pe-32 border-b-[2px] pt-10 pb-4'>
      <div>
        <h1 className='font-bold text-3xl'>Exclusive</h1>
      </div>
      <div className='flex justify-center items-center text-md gap-10 font-semibold'>
        <Link to='/' className={`cursor-pointer pb-[2px] ${activeLink === 'home' ? 'border-b-2 border-black' : ''}`} onClick={() => handleLinkClick('home')}>Home</Link>
        <Link to='/about' className={`cursor-pointer pb-[2px] ${activeLink === 'about' ? 'border-b-2 border-black' : ''}`} onClick={() => handleLinkClick('about')}>About</Link>
        <Link to='/contact' className={`cursor-pointer pb-[2px] ${activeLink === 'contact' ? 'border-b-2 border-black' : ''}`} onClick={() => handleLinkClick('contact')}>Contact</Link>
      </div>
      <div className='flex justify-center gap-5 items-center relative'>
        <span className='flex bg-gray-100 justify-center items-center rounded-md px-2'>
          <input
            type="text"
            placeholder='What are you looking for?'
            value={input}
            onChange={handleInputChange}
            className='bg-gray-100 ps-4 py-3 rounded-md outline-none text-sm w-[14rem]'
          />
          <CiSearch className='text-3xl cursor-pointer' />
        </span>
        <span><LuHeart className='text-3xl cursor-pointer' /></span>
        <Link to='/favourites' className="relative">
          <IoCartOutline className='text-3xl cursor-pointer' />
          {Products.length > 0 && (
            <span className='bg-orange-500 rounded-full text-[12px] font-bold w-4 h-4 flex items-center justify-center absolute -top-[3px] right-[-5px]'>
              {Products.length}
            </span>
          )}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
