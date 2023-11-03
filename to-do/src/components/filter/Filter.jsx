import Button from "../button/Button"
import './Filter.css'

const Filter = ({filter, setFilter, sort, setSort}) => {
  return (
    <div className="filter">
        <div className="filter-options">
            <div className="filter-sort">
              <Button onClick={(e) => setSort('A-Z')} value='A-Z' style={{color: "black", width: 45, height:30, backgroundColor: '#e8e8e8', boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.15)' }}/>
              <Button onClick={(e) => setSort('Z-A')} value='Z-A' style={{color: "black", width: 45, height:30, backgroundColor: '#e8e8e8',  boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.10)'}}/>
            </div>
            <div className="filter-status">
               <p>Status</p> 
               <select value={filter} onChange={(e) => setFilter(e.target.value) }>
                    <option value='All'> All</option>
                    <option value='Done'> Done</option>
                    <option value='Incomplete'> Incomplete</option>
               </select>
            </div>
            
        </div>
    </div>
  )
}

export default Filter

