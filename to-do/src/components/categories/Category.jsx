import React from 'react'
import './Category.css'

function Category({category, color}) {
  return (
    <div className='category'>
        <span style={color} ></span>
        <p>{category}</p>
    </div>
  )
}

export default Category