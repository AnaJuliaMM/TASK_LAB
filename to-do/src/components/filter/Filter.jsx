import Button from "../button/Button"
import './Filter.css'

const Filter = ({filter, setFilter, sort, setSort}) => {
  return (
    <div className="filter">
        <div className="filter-options">
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


// {/* <div>
//                <p>Ordem alfabética:</p> 
//                 <Button onClick={(e) => setSort('A-Z')} value='A-Z'/>
//                 <Button onClick={(e) => setSort('Z-A')} value='Z-A'/>
//             </div> */}