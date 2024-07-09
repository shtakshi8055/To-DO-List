import React, { useEffect } from "react";

import {useState, useEffec} from "react";

import ToDoItems from "./ToDoItem";
import Item from "./editToDo";

function ToDoComponent(){
    const [todo, setTodo] = useState([]);
    const [task, setTask] = useState('');
    const [title, setTitle] = useState('');
    //ADD
    const handleAddToDo = () => {
      if(task.trim() !== ''){
       setTodo([...todo, task]);
       localStorage.setItem('todo', JSON.stringify(todo));
       setTask ("");      
       }
       
      }
    
  //ARRAY CONVERTED TO STRING
    let string = JSON.stringify(todo)
    localStorage.setItem("todo", string)

    //REMOVE
    const handleRemoveToDo = (index) => {
      const num = todo.filter((input,i) => i !== index);
      setTodo(num);
    };


const handleEdit =()=>{
    
};
          

return(
    <>
    <div id="style" className="App.header"> 
      <div className="App">
        <h1><u>To-Do-List</u></h1>

            <input className="style3" placeholder="Add Task" type="text" 
                value={task} onChange={(e) => setTask(e.target.value)}/>
               
            <button className="style-des" onClick={handleAddToDo}> Add </button>           
      </div>
      <div>
      <ul className="mylist"> 
        {todo.map((todo,index) => (
           <li key={todo}>
           {todo}
           <button onClick={handleEdit}>Edit</button>
           <button className="rem" onClick={() => handleRemoveToDo(index)}>Remove</button>
         </li>
        ))}
      </ul>
      </div>
      </div>
    </>
  );
}
export default ToDoComponent;