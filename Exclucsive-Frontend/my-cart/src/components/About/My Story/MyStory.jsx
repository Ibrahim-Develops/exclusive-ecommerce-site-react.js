import React from 'react'
import Sideimg from './Sideimg.png'
const MyStory = () => {
  return (
    <>
      <div className='flex ms-28 gap-20 mt-[10rem]'>
            <div className='flex flex-col justify-center w-[55%] gap-7 pe-20'>
                <h1 className='text-5xl font-semibold mb-2'>Our Story</h1>
                <p>Launched in 2015, Exclusive is South Asia's permier online shopping marketplace with an active presence in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millions customers across the region.</p>
                <p>Exclusive has more than 1 Million Products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging from customer.</p>
            </div>
            <div className='w-[50%]'>
                <img src={Sideimg} alt="" />
            </div>
      </div>  
    </>
  )
}

export default MyStory