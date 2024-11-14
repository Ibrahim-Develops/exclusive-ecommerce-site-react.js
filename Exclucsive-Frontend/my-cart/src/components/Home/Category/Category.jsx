import React, { useState } from 'react';
import { CiMobile3 } from "react-icons/ci";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { IoWatchOutline } from "react-icons/io5";
import { IoCameraOutline } from "react-icons/io5";
import { IoShirtOutline } from "react-icons/io5";
import { PiGameControllerLight } from "react-icons/pi";
import Speaker from './Speaker.png'; 

const Category = ({ onSelectCategory }) => { 
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    onSelectCategory(category); 
  };

  const categories = [
    { icon: <CiMobile3 className='text-5xl' />, label: 'Phones' },
    { icon: <HiOutlineComputerDesktop className='text-5xl' />, label: 'Computers' },
    { icon: <IoWatchOutline className='text-5xl' />, label: 'SmartWatch' },
    { icon: <IoCameraOutline className='text-5xl' />, label: 'Camera' },
    { icon: <IoShirtOutline className='text-5xl' />, label: 'Clothes' },
    { icon: <PiGameControllerLight className='text-5xl' />, label: 'Gaming' },
  ];

  return (
    <div className='border-t-[2px] ms-28 me-36 mt-20 m-auto'>
      <div className='flex items-center gap-3 mt-20'>
        <span className='w-4 rounded h-9 bg-red-500 text-red-500'></span>
        <h3 className='text-sm font-bold text-red-500'>Categories</h3>
      </div>
      <div className='my-3'>
        <h1 className='font-bold text-3xl'>Browse By Category</h1>
      </div>
      <div className='mb-12 mt-14 flex items-center justify-between'>
        {categories.map((category, i) => (
          <div
            key={i}
            className={`w-[170px] h-[140px] rounded justify-center items-center border-gray-300 border-[1px] flex flex-col gap-3 transition duration-300 shadow-sm
              ${selectedCategory === category.label ? 'text-white bg-red-500 border-none' : ''}`}
            onClick={() => handleCategoryClick(category.label)}
          >
            {category.icon}
            <h2>{category.label}</h2>
          </div>
        ))}
      </div>
      <div className='relative mt-28 flex flex-col items-center'>
        <img src={Speaker} alt="Speaker" />
        <button className='absolute bottom-[25%] left-[5%] px-8 font-bold py-3 bg-red-500 text-white rounded'>Buy Now</button>
      </div>
    </div>
  );
};

export default Category;
