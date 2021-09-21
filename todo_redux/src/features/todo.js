import { createSlice } from '@reduxjs/toolkit'
 
const initialState = {
    todoList: []
}

const todo = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        saveTodo: (state, action) =>{
            state.todoList.push(action.payload)
        }
    }
});

export const { saveTodo } = todo.actions
export const selectTodoList = state => state.todos.todoList
export default todo.reducer