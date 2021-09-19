import React from 'react'
import Input from './components/Input'
import './App.css'
import TodoItem from './components/TodoItem'
const App = () => {
  const list = [{
    item: 'todo',
    done:'false',
    id:8938927392
  },{
    item:'todo',
    done: 'true',
    id: 989392932
  }]

  let key = 0;
  return (
    <div className = 'App'>
      <div className='app_container'>
        <div className='app_todoContainer'>
          {/* <List/> */}
          {
            
            list.map(ele =>{
              key++;
              return(
                <TodoItem
                key={key}
                item={ele.item}
                done={ele.done}
                id = {ele.id}
                />
              )
            })
          }
        </div>
        <div className='App_input'>
          <Input/>
        </div>
        
      </div>
      {/* Inputs */}
       
      {/* complete todo list */}
      {/* Todo List */}
    </div>
  )
}

export default App
