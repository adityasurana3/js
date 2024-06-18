import { useEffect, useState } from 'react'
import './App.css'
import axios from "axios";

function App() {
  const [id, setId] = useState(1)
  function getId(i){
    setId(i)
  }
  return(
    <div>
      <button onClick={function(){
        getId(1)
      }}>1</button>
      <button onClick={function(){
        getId(2)
      }}>2</button>
      <button onClick={function(){
        getId(3)
      }}>3</button>
      <button onClick={function(){
        getId(4)
      }}>4</button>
      <Todo id={id}></Todo>
    </div>
  )
}


function Button({num}){
  return(
    <button >{num}</button>
  )
}

function Todo({id}){
  const [todo, setTodo] = useState({})
  useEffect(()=>{
    axios.get("https://sum-server.100xdevs.com/todo?id="+id)
    .then(function(response){
      console.log(response.data.todo)
      setTodo(response.data.todo)
    })
  },[id])
  return(
    <div>
      {}
      <h1>{todo.title}</h1>
      {todo.description}
    </div>
  )
}

export default App;
