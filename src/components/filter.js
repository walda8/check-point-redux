import React from 'react';
import { useDispatch } from 'react-redux';
import { filterDone, filterNotDone, filterAll } from "../redux/todoAction";

function FilterDone() {
    const dispatch = useDispatch();

    return(
        <div>
            <label>
            <input type="radio" name='foo'  onClick={()=>dispatch(filterDone())} />
            Done
            </label>
            <label>
            <input type="radio" name='foo' onClick={()=>dispatch(filterNotDone())} />
            Not done
            </label>
            <label>
            <input type="radio" name='foo' onClick={()=>dispatch(filterAll())} />
            Show All
            </label>
        </div>

    )
}

export default FilterDone
