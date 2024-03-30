import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

// useEffect hook
// function App() {
//   const [todos, setTodos] = useState([]);

//   // fetch("http://localhost:3000/todos")
//   //   .then(async function(res) {
//   //     const json = await res.json();
//   //     setTodos(json.todos);
//   //   })

//   return (
//     <div>
//       <CreateTodo></CreateTodo>
//       <Todos todos={todos}></Todos>
//     </div>
//   )
// }

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then(async function (res) {
        const json = await res.json();
        setTodos(json.todos);
      });
  }, []); // Removed 'todos' from the dependencies array

  return (
    <div>
      <CreateTodo />
      <Todos todos={todos} />
    </div>
  );
}

export default App
