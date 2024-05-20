import React from 'react'
import {FaXTwitter} from "react-icons/fa6";
import {FaLinkedin} from "react-icons/fa";
import {FaYoutube} from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Foter = () => {
  return (
    <div className='bg-gray-50 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20 mt-12'>
    <div className='p-5'>
          <ul>
            <p className='text-gray-800 font-bold text-3xl pb-6'>
              NEXUS
            </p>
            {/* <div className='flex gap-6 pb-5'>
                 <AiFillInstagram href='https://www.instagram.com/navonmesh1103' className='text-2xl cursor-pointer hover:text-pink-600'/>
                 <FaXTwitter className='text-2xl cursor-pointer hover:text-gray-800'/>
                 <FaLinkedin href='https://www.linkedin.com/company/nexus-reach-us-ease-up/' className='text-2xl cursor-pointer hover:text-blue-600'/>
                 <FaYoutube className='text-2xl cursor-pointer hover:text-red-600'/>
            </div> */}
            <div className='flex gap-6 pb-5'>
    <a href='https://www.instagram.com/_nexus.us_' target='_blank' rel='noopener noreferrer' className='text-2xl cursor-pointer hover:text-pink-600'>
        <AiFillInstagram />
    </a>
    <a href='https://twitter.com' target='_blank' rel='noopener noreferrer' className='text-2xl cursor-pointer hover:text-gray-800'>
        <FaXTwitter />
    </a>
    <a href='https://www.linkedin.com/company/nexus-reach-us-ease-up/' target='_blank' rel='noopener noreferrer' className='text-2xl cursor-pointer hover:text-blue-600'>
        <FaLinkedin />
    </a>
    <a href='https://www.youtube.com' target='_blank' rel='noopener noreferrer' className='text-2xl cursor-pointer hover:text-red-600'>
        <FaYoutube />
    </a>
</div>

          </ul>
    </div>
    <div className='p-5'>
        <ul>
          <p className='text-gray-800 font-bold text-2xl pb-4'>Services</p>
          <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer' ><a href="/electrician">Electrican</a></li>
          <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Laptop Reparing</li>
          <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'><a href="/plumber">Plumber</a></li>
          <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Painter</li>
          <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Cleaning and Sanitation</li>
        </ul>
    </div>
     <div className='p-5'>
        <ul>
          <p className='text-gray-800 font-bold text-2xl pb-4'>Acadbud</p>
          <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>About</li>
          <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Services</li>
          <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Pricing</li>
          <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Careers</li>
          <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Press & Media</li>
        </ul>
     </div>
     <div className='p-5'>
      <ul>
        <p className='text-gray-800 font-bold text-2xl pb-4'>Support</p>
        <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Contact</li>
        <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Support</li>
        <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>List Of Charges</li>
        <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Downloads & Resources</li>
        <li className='text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer'>Videos</li>

      </ul>
     </div>
    </div>
  )
}
export default Foter
