import React from 'react'
import './TodoItem.css'
import {Checkbox} from '@material-ui/core'

const TodoItem = ({item, done, id}) => {
    console.log(`Item from ${item}`)

    const handleCheck= ()=>{

    }

    return (
        <div className='TodoItem'>
            <div className="card border-danger mb-3" style={{"maxWidth":" 100rem"}}>
                    <div className="card-body text-danger" style={{'display':'flex','flexWrap':'wrap'}}>
                    
                    <Checkbox
                        checked={done}
                        color="primary"
                        onChange={handleCheck}
                        inputProps={{'ariaLabel':'secondary checkbox'}}
                    />

                     <p className={done && 'todoItem--done'}>{item}</p>
                     </div>
             </div>
        </div>
    )
}

export default TodoItem
