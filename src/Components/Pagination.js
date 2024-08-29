import React from 'react'

function Pagination({ onPagechange, page, pageSize, blogs }) {
  const totalpages = Math.ceil(blogs.length / pageSize);
  const renderPaginatonlinks = () => {
    return Array.from({ length: totalpages }, (_, i) => i + 1).map((pageNumber) => (
      <li className={pageNumber === page ? "activePagination" : ""} key={pageNumber}>
        <a href="#" onClick={() => onPagechange(pageNumber)}>{pageNumber}</a>
      </li>
    ))
  }
  return (
    <ul className='pagination my-8 flex-wrap gap-4'>
      <li>
        <button onClick={() => onPagechange(page - 1)} disabled={page===1}>
          previous
        </button>
      </li>
      <div className='flex gap-1'>{renderPaginatonlinks()}</div>

      <li>
        <button onClick={() => onPagechange(page + 1)} disabled={page===totalpages}>
          Next
        </button>
      </li>
    </ul>
  )
}

export default Pagination
