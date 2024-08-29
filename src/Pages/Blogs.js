import React from 'react'
import Blogpage from '../Components/Blogpage'

function Blogs() {
  return (
    <div>
      <div className='py-40 bg-black text-white text-center'>
        <h2 className='text-5xl lg:text-7xl leading-snug font-bold mb-5 '>
            Blog Page
        </h2>
      </div>
      {/* all blogs */}
      <div className='max-w-7xl mx-auto'>
<Blogpage/>
      </div>
    </div>
  )
}

export default Blogs
