import Button from "../button/Button"
import './Filter.css'

const Filter = ({filter, setFilter, sort, setSort}) => {
  return (
    <div className="filter">
        <h2>Filtrar:</h2>
        <div className="filter-options">
            <div>
               <p>Status:</p> 
               <select value={filter} onChange={(e) => setFilter(e.target.value) }>
                    <option value='All'> All</option>
                    <option value='Done'> Done</option>
                    <option value='Incomplete'> Incomplete</option>
               </select>
            </div>
            <div>
               <p>Ordem alfabética:</p> 
                <Button onClick={(e) => setSort('A-Z')} value='A-Z'/>
                <Button onClick={(e) => setSort('Z-A')} value='Z-A'/>
            </div>
        </div>
    </div>
  )
}

export default Filter