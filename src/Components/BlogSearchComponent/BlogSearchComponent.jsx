import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import './BlogSearchComponent.css'

const BlogSearchComponent = ({ onSearch }) =>{
  const [searchTerm, setSearchTerm] = useState('')
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value)
    onSearch(e.target.value)
  }
  return (
    <div className='main-container'>
      <h1>Search Blogs</h1>
      <div className='input-wrapper'>
        <FaSearch id='icon-search' />
        <input className='search-input' placeholder='search here ....' value={searchTerm} onChange={handleSearchChange} />
      </div>
    </div>
  )
}

export default BlogSearchComponent
