import React from 'react'
import Search from '../search/Search'
import Filter from '../filter/Filter'
import './Header.css'
export default function Header({filter, setFilter, sort, setSort, search, setSearch}) {
  return (
    <header>
        <div className='logo'>
          <h1>Routine Control</h1>
        </div>
        <Search search={search} setSearch={setSearch}/>
        <Filter filter={filter} setFilter={setFilter} sort={sort} setSort={setSort}/>
        
    </header>
  )
}
