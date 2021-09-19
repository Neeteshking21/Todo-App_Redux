import React from 'react'
import './TodoItem.css'

const TodoItem = ({item, done, id}) => {
    console.log(`Item from ${item}`)
    return (
        <div className='TodoItem'>
            <div className="card border-danger mb-3" style={{"maxWidth":" 18rem"}}>
                <div className="card-header">Our Todo</div>
                    <div className="card-body text-danger">
                        <h5 className="card-title">Title</h5>
                     <p className="card-text">{item}</p>
                     </div>
             </div>
        </div>
    )
}

export default TodoItem
