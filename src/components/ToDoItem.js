import React, {useState, useEffect} from "react";
import ToDoComponent from "./ToDoComponents";


function ToDoItems(){   

    const [todo, setTodo] = useState([]);
   // const [task, setTask] = useState('');
    
    const todos = localStorage.getItem('todos');
    //LOAD
    useEffect = (() => {
      const storedTodo = JSON.parse(localStorage.getItem('todo'));
      if(storedTodo){
        setTodo(storedTodo);
      }
    },[]);
    
    //UPDATE
    useEffect = (() => {
      localStorage.setItem('todo', JSON.stringify(todo));
     }, [todo]);
    
  
      return(
        <>
        
            <ToDoComponent/>

        </>
      );
    }
    export default ToDoItems;