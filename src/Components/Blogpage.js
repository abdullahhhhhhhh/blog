import React, { useEffect, useState } from 'react'
import BlogCards from './BlogCards';
import Pagination from './Pagination';
import Category from './Category';
import Sidebar from './Sidebar';

function Blogpage() {
    const [blogs, setBlogs] = useState([]);

    const [page, setPage] = useState(1);

    const pageSize = 12; //blogs per page

    const [currentCategory, setcurrentCategory] = useState(null);
const[activeCategory,setactiveCategory]=useState()

    useEffect(() => {
        async function fetchblog() {
            let url = `http://localhost:5000/blogs?page=${page}&limit=${pageSize}`

            //filter by category
            if (currentCategory) {
                url += `&category=${currentCategory}`
            }
            const response = await fetch(url);
            const data = await response.json()

            setBlogs(data)
        }
        fetchblog();

    }, [page, pageSize, currentCategory])

    // page changing btn
    const handlePageChange = (pageNumber) => {
        setPage(pageNumber)
    }

    const handleCategoryChange = (category) => {
        setcurrentCategory(category)
        setPage(1)
        setactiveCategory(category)
    }
    return (
        <div>

            {/* category section */}
            <div>
                <Category onSelectedCategory={handleCategoryChange} currentCategory={currentCategory} activeCategory={activeCategory}/>
            </div>
            {/* Blogcard section */}
            <div className='flex flex-col lg:flex-row gap-12'>
                <BlogCards  blogs={blogs} page={page} currentCategory={currentCategory} pageSize={pageSize} />
                <div><Sidebar/></div>
            </div>
            {/* Sidebar */}

           
            {/*  Pagination section*/}
            <div>
                <Pagination onPagechange={handlePageChange}  blogs={blogs} page={page} pageSize={pageSize}/>
            </div>
        </div>
    )
}

export default Blogpage
