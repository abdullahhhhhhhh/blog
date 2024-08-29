import React from 'react'

function Category({activeCategory,onSelectedCategory,currentCategory}) {
    const categories= ["Health","Startups","Fintech","AI","Security","Apps","Tech"]
  return (
    <div className='px-4 mb-8 lg:space-x-16  flex flex-wrap items-center border-b-2 py-5 text-gray-600 font-semibold'>
    <button onClick={()=>onSelectedCategory(null)}className={`lg:ml-12 ${activeCategory?"":"active-button"}`}> all </button>
      {
        categories.map((category)=>

<button 
onClick={()=>onSelectedCategory(category)}
className={`mr-2 space-x-16 ${activeCategory===category?"active-button":""}`}
key={category}>
    {category}
    </button>
        )
      }
    </div>
  )
}

export default Category
