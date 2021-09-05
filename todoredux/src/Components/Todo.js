import React, { useState } from 'react'
import{ useDispatch} from 'react-redux'
import { addTodo, deleteTodo} from '../Actions/TodoListActions'
import './Todo.css'
const Todo = () => {

    const [input, setInput] = useState('')
    const dispatch = useDispatch()
    console.log(input)

    const submit = (evt)=>{
        evt.preventDefault()
        setInput('')
    }

    return (
        <>
        <div className='container' >
            <div className='Todo_card'>
            <h1>ToDo App</h1>
            <form onSubmit={submit} >
                <input type='text' placeholder='Add Todo' value={input} onChange={(e)=> setInput(e.target.value)} required ></input>
                <button onClick={()=> dispatch(addTodo(input))}><ion-icon name="add-outline"></ion-icon></button>
            </form>

            {/* Todos List */}

            <div className='todos_list'>
                    <input disabled></input>
                    <button><ion-icon name="trash-outline"></ion-icon></button>
            </div>
            </div>
        </div>
        </>
    )
}

export default Todo
    