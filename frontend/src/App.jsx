import { useState } from 'react'
import "./App.css"
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
  const [todos, setTodos] = useState([]);

  fetch("http://localhost:3000/todos")
    .then(async function(res){
      const json = await res.json();
      setTodos(json.todos);
    })

  return (
    <div className=' bg-gray-500 overflow-auto'>
      <div className='w-screen h-screen py-60 flex items-center justify-center divide-x'>
          <CreateTodo></CreateTodo>
          <Todos todos={todos}></Todos>
     </div> 
    </div>
  )
}

export default App
   