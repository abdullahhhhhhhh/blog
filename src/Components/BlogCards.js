import React from 'react'
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function BlogCards({ blogs,page,currentCategory,pageSize }) {
    const Filterblogs = blogs.filter((blogs=>!currentCategory||blogs.category===currentCategory)).slice((page-1)*pageSize,page*pageSize);
    console.log(Filterblogs)
     return (
        <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8'>
            {
                Filterblogs.map((blog) => <Link to={`/blogs/${blog.id}`} key={blog.id} className='p-5 shadow-lg rounded cursor-pointer'>
                    <div>
                        <img src={blog.image} alt={blog.title} className='w-full'></img>

                    </div>
                    <h3 className=' font-bold mt-4 mb-5 hover:text-blue-400 cursor-pointer'>{blog.title}</h3>
                    <p className='mb-2 text-sm text-gray-600'> <FaUser className='inline-flex items-center mr-2' /> {blog.author}</p>
                    <p className='text-sm '>Published: {blog.published_date}</p>
                </Link>)
            }
        </div>
    )
}

export default BlogCards

