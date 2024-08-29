import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function Banner() {
  return (
    <div className=' px-4 py-32 bg-black mx-auto'>
        <div className='text-white text-center'>
        <h1 className='text-5xl lg:text-7xl leading-snug font-bold mb-5 '>
            Welcome to our Blog
        </h1>
        <p className='text-gray-100 lg:w-3/5 mx-auto mb-5'>Start your blog day and join a community for writers who are pationate about sharing their stories and ideas.</p>
        <div>
        <Link to='/about' className='text-white font-medium hover:text-orange-500 inline-flex items-center'>learn More <FaArrowRight className='mt-1 ml-2' /></Link>
       </div>
        </div>
      
    </div>
  )
}

export default Banner
