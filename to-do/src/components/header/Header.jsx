import React from 'react'
import Search from '../search/Search'
import Filter from '../filter/Filter'
import './Header.css'
export default function Header() {
  return (
    <header>
        <div className='logo'>
          <h1>Routine Control</h1>
        </div>
        <Search/>
        
    </header>
  )
}
