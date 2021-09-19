import React, { useState } from 'react'
import './Input.css'
import { saveTodo  } from '../features/todo'
import {useDispatch} from 'react-redux'

const Input = () => {

    const[input, setInput] =  useState('')

    const dispatch = useDispatch()

    const addTodo = (evt)=>{
        console.log(`Adding todo ${input}`)
        dispatch(saveTodo({
            item: input,
            done: false,
            id: Date.now()
        }))
    }

    return (
        <div className='Input'>
           <div className="input-group mb-3">
                <input type="text" className="form-control inputField" value={input} placeholder="Write Todo here" aria-describedby="button-addon2" onChange={(evt)=>setInput(evt.target.value)}/>
                <button className="btn btn-outline-danger button"  onClick={addTodo} type="button" id="button-addon2">Add todo</button>
           </div>
        </div>
    )
}

export default Input
