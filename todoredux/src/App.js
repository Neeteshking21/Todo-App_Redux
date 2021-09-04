import React from 'react'
import './App.css'
const App = () => {
  return (
    <>
      <div className='container'>
        <div className='Todo_card'>
          <h1>ToDo App</h1>
          <form>
            <input type='text'></input>
            <button><ion-icon name="add-outline"></ion-icon></button>
          </form>

        {/* Todos List */}

          <div className='todos_list'>
                <input disabled></input>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
