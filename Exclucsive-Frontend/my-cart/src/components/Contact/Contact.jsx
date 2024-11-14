import React, { useState, useRef } from 'react';
import { IoCallOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [detail, setDetail] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const form = useRef();

  const handleInput = (e) => {
    setDetail({ ...detail, [e.target.name]: e.target.value });
  };

  const sendMail = (e) => {
    e.preventDefault(); 

    emailjs
      .send('service_xwg56d8', 'template_5pqr9jh', detail, {
        publicKey: 'QA9Z8seIu_hzR71iZ',
      })
      .then(
        () => {
          console.log('SUCCESS!');
     
          setDetail({
            name: '',
            email: '',
            subject: '',
            message: ''
          });
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <>
      <div className='flex justify-center items-center gap-10 mt-16 mb-20 h-[440px]'>
        <div className='w-[320px] p-5 shadow-md rounded-md'>
          <div className='m-5 flex flex-col gap-3'>
            <span className='flex gap-4 items-center'>
              <span className='w-12 h-12 flex justify-center items-center rounded-full bg-red-500'>
                <IoCallOutline className='text-white text-xl' />
              </span>
              <p className='font-semibold'>Call To US</p>
            </span>
            <p>We are available 24/7, 7 days a week.</p>
            <p>Phone: +8801611112222</p>
          </div>
          <div className='border-t-[1px] border-black m-5 pt-5 flex flex-col gap-3'>
            <span className='flex gap-4 items-center'>
              <span className='w-12 h-12 flex justify-center items-center rounded-full bg-red-500'>
                <CiMail className='text-white text-xl' />
              </span>
              <p className='font-semibold'>Write To US</p>
            </span>
            <p>Fill out our form and we will contact you within 24 hours.</p>
            <p>Emails: customer@exclusive.com</p>
            <p>Emails: support@exclusive.com</p>
          </div>
        </div>
        <form ref={form} className='flex flex-col py-5 px-10 shadow-md h-[440px] rounded-md' onSubmit={sendMail}>
          <div className='flex justify-between items-center gap-4 mb-5'>
            <input
              onChange={handleInput}
              name='name'
              className='bg-gray-100 w-[200px] h-12 ps-2 rounded-md outline-none'
              type="text"
              placeholder='Your Name'
              required
            />
            <input
              onChange={handleInput}
              name='email'
              className='bg-gray-100 w-[200px] h-12 ps-2 rounded-md outline-none'
              type="email" 
              placeholder='Your Email'
              required
            />
            <input
              onChange={handleInput}
              name='subject'
              className='bg-gray-100 w-[200px] h-12 ps-2 rounded-md outline-none'
              type="text"
              placeholder='Subject'
              required
            />
          </div>
          <div className='bg-gray-100 ps-2 h-[220px] rounded-md'>
            <textarea
              onChange={handleInput}
              name='message'
              className='pt-2 w-full h-full bg-gray-100 rounded-md outline-none'
              placeholder='Your Message'
              required
            />
          </div>
          <button type="submit" className='px-8 py-3 bg-red-500 w-[200px] text-white rounded absolute bottom-[18%] right-[18%]'>
            Send Message
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
