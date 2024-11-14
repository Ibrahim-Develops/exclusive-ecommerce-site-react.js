import React, { useState } from 'react';
import { CiShop, CiDollar } from "react-icons/ci";
import { IoBagHandleOutline } from "react-icons/io5";
import { FaSackDollar } from "react-icons/fa6";

const Positive = () => {
  const [activeItem, setActiveItem] = useState(null);

  const handleClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className='flex ms-28 me-28 justify-evenly mt-28 mb-28'>
      <div className={`flex flex-col justify-center items-center border-[1px] rounded w-[250px] h-[240px] transition duration-300 shadow-sm ${activeItem === 1 ? 'bg-red-500' : ''}`} onClick={() => handleClick(1)}>
        <div className={`rounded-full w-20 h-20 flex justify-center items-center mb-5 ${activeItem === 1 ? 'bg-slate-300' : 'bg-gray-300'}`}>
          <span className={`rounded-full w-14 h-14 flex justify-center items-center ${activeItem === 1 ? 'bg-white' : 'bg-black'}`}>
            <CiShop className={`text-4xl ${activeItem === 1 ? 'text-black' : 'text-white'}`} />
          </span>
        </div>
        <p className={`text-2xl font-bold ${activeItem === 1 ? 'text-white' : ''}`}>10.5k</p>
        <p className={`${activeItem === 1 ? 'text-white' : ''}`}>Sellers active in our site</p>
      </div>

      <div className={`flex flex-col justify-center items-center border-[1px] rounded w-[250px] h-[240px] transition duration-300 shadow-sm ${activeItem === 2 ? 'bg-red-500' : ''}`} onClick={() => handleClick(2)}>
        <div className={`rounded-full w-20 h-20 flex justify-center items-center mb-5 ${activeItem === 2 ? 'bg-gray-300' : 'bg-gray-300'}`}>
          <span className={`rounded-full w-14 h-14 flex justify-center items-center ${activeItem === 2 ? 'bg-white' : 'bg-black'}`}>
            <CiDollar className={`text-4xl ${activeItem === 2 ? 'text-black' : 'text-white'}`} />
          </span>
        </div>
        <p className={`text-2xl font-bold ${activeItem === 2 ? 'text-white' : ''}`}>33k</p>
        <p className={`${activeItem === 2 ? 'text-white' : ''}`}>Monthly Product Sale</p>
      </div>

      <div className={`flex flex-col justify-center items-center border-[1px] rounded w-[250px] h-[240px] transition duration-300 shadow-sm ${activeItem === 3 ? 'bg-red-500' : ''}`} onClick={() => handleClick(3)}>
        <div className={`rounded-full w-20 h-20 flex justify-center items-center mb-5 ${activeItem === 3 ? 'bg-gray-300' : 'bg-gray-300'}`}>
          <span className={`rounded-full w-14 h-14 flex justify-center items-center ${activeItem === 3 ? 'bg-white' : 'bg-black'}`}>
            <IoBagHandleOutline className={`text-4xl ${activeItem === 3 ? 'text-black' : 'text-white'}`} />
          </span>
        </div>
        <p className={`text-2xl font-bold ${activeItem === 3 ? 'text-white' : ''}`}>45.5k</p>
        <p className={`${activeItem === 3 ? 'text-white' : ''}`}>Customers active on our site</p>
      </div>

      <div className={`flex flex-col justify-center items-center border-[1px] rounded w-[250px] h-[240px] transition duration-300 shadow-sm ${activeItem === 4 ? 'bg-red-500' : ''}`} onClick={() => handleClick(4)}>
        <div className={`rounded-full w-20 h-20 flex justify-center items-center mb-5 ${activeItem === 4 ? 'bg-gray-300' : 'bg-gray-300'}`}>
          <span className={`rounded-full w-14 h-14 flex justify-center items-center ${activeItem === 4 ? 'bg-white' : 'bg-black'}`}>
            <FaSackDollar className={`text-3xl ${activeItem === 4 ? 'text-black' : 'text-white'}`} />
          </span>
        </div>
        <p className={`text-2xl font-bold ${activeItem === 4 ? 'text-white' : ''}`}>25k</p>
        <p className={`${activeItem === 4 ? 'text-white' : ''}`}>Annual gross sale on our site</p>
      </div>
    </div>
  );
};

export default Positive;
