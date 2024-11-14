import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import Arrival1 from './Arrival1.png';
import Arrival2 from './Arrival2.png';
import Arrival3 from './Arrival3.png';
import Arrival4 from './Arrival4.png';

const Arrival = () => {
  return (
    <div className='ms-28 me-36 mt-56 mb-28'>
      <div className='flex items-center gap-3 mt-20'>
        <span className='w-4 rounded h-9 bg-red-500 text-red-500'></span>
        <h3 className='text-sm font-bold text-red-500'>Featured</h3>
      </div>
      <div className='mt-3 mb-16'>
        <h1 className='font-bold text-3xl'>New Arrival</h1>
      </div>
      <div className='flex gap-8 relative'>
        <div className='relative'>
          <img src={Arrival1} alt="PlayStation 5" className='w-full h-auto' />
          <div className='absolute bottom-[40px] left-[30px] text-white'>
            <h1 className='font-bold text-xl'>PlayStation 5</h1>
            <p className='font-thin my-3 w-[250px]'>Black and White version of the PS5 coming out on sale.</p>
            <Link to="/details/13">
              <button className='border-b-[0.1px]'>Shop Now</button>
            </Link>
          </div>
        </div>
        <div className='flex flex-col gap-8'>
          <div className='relative'>
            <img src={Arrival2} alt="Women's Collections" className='w-full h-auto' />
            <div className='absolute bottom-[40px] left-[30px] text-white'>
              <h1 className='font-bold text-xl'>Women's Collections</h1>
              <p className='font-thin my-3 w-[230px]'>Featured woman collections that give you another vibe.</p>
              <Link to="/details/15"> 
                <button className='border-b-[0.1px]'>Shop Now</button>
              </Link>
            </div>
          </div>
          <div className='flex gap-8'>
            <div className='relative'>
              <img src={Arrival3} alt="Speakers" className='w-full h-auto' />
              <div className='absolute bottom-[40px] left-[30px] text-white'>
                <h1 className='font-bold text-xl'>Speakers</h1>
                <p className='font-thin my-2 text-sm w-[160px]'>Amazon wireless speakers.</p>
                <Link to="/details/14"> 
                  <button className='border-b-[0.1px]'>Shop Now</button>
                </Link>
              </div>
            </div>
            <div className='relative'>
              <img src={Arrival4} alt="Perfume" className='w-full h-auto' />
              <div className='absolute bottom-[40px] left-[30px] text-white'>
                <h1 className='font-bold text-xl'>Perfume</h1>
                <p className='font-thin text-sm my-2 w-[180px]'>GUCCI INTENSE OUD EDP.</p>
                <Link to="/details/15"> 
                  <button className='border-b-[0.1px]'>Shop Now</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Arrival;
