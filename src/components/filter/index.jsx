

import { useDispatch } from 'react-redux';
import { useSelector } from "react-redux";
import { addFilter } from '../../services/factures/filter';
function Filter() {
    
    const {filter} = useSelector((state) => state.filter)
    const dispatch = useDispatch()
    function handleChange(e) {
        localStorage.setItem('valueFilter', e.target.value)
        dispatch(addFilter(e.target.value))
    }
    
    
    return ( 
        <div className="app-filter">
            <select className="filter-select" onChange={handleChange} defaultValue={localStorage.getItem('valueFilter')?localStorage.getItem('valueFilter'):filter}>
            
                <option value={"Angular"}>
                    <p>Angular</p>
                </option>
                
                <option value={"React"}>
                    <p>React</p>
                </option>
                
                <option value={"Vuejs"}>
                    <p>Vuejs</p>
                </option>
            </select>
        </div>
     );
}

export default Filter;