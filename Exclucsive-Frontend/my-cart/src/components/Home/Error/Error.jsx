import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full h-[75vh] mb-[40px]'>
        <h1 className='text-[7rem]'>404 Not Found</h1>
        <p className=''>Your visited page not found. You may go home page</p>
        <Link to='/'><button className='px-9 py-3 bg-red-500 mt-24 text-white rounded'>Back to home page</button></Link>
    </div>
  )
}

export default Error