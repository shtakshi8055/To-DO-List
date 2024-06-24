import React from "react";

import {useState, useEffec} from "react";

import ToDoItems from "./ToDoItem";

function ToDoComponent(){

    const [todo, setTodo] = useState([]);
    const [task, setTask] = useState('');
    const [error, setError] = useState('');
    const [editing, setEditing] = useState(null);

    const handleInputChange = (e) =>{
      setTask(e.target.value);
    }

    //VALIDATION
    const validateTask = () =>{
      if(!task.trim()){
        setError('Cannot be empty!!');
        return false;
      }
      setError('');
      return true;
    }

    //ADD
    const handleAddToDo = () => {
      if(task.trim() !== ''){
       setTodo([...todo, task]);
       localStorage.setItem('todo', JSON.stringify(todo));
       setTask (""); 
      }
      else if(!task.trim()){
        setError('Cannot be empty!!');
        return false;
      }
      setError('');
    };
    
  //ARRAY CONVERTED TO STRING
    let string = JSON.stringify(todo)
    localStorage.setItem("todo", string)

    // EDIT
    const editTask = (index) =>{
        setTask(todo[index]);
        setEditing(index);
    };

    //Save
    const saveTask = () =>{
      if(validateTask()){
        const updatedTasks = todo.map((t, index) =>
          index === editing ? task : t
        );
        setTodo(updatedTasks);
        setTask('');
        setEditing(null);
      }
};

    //REMOVE
    const handleRemoveToDo = (index) => {
      const num = todo.filter((input,i) => i !== index);
      setTodo(num);
    };

return(
    <>
    <div className="container"> 
      
        <h1><u>To-Do-List</u></h1>
<div className="input-group">
            <input className="style3" placeholder="Add Task" type="text" 
                value={task} onChange={(e) => setTask(e.target.value)}></input>
                {editing === null ? (
                  <button className="add" onClick={handleAddToDo}> Add </button>
                  
                ) : (
                  <button className="save" onClick={saveTask}>Save</button>
                )

                }      
                

      </div>
      <div>
      <ul className="mylist"> 
        {todo.map((todo,index) => (
           <li className="task" key={todo}>
           {todo}
           <button className="remove" onClick={() => handleRemoveToDo(index)}>Remove</button>
            <button className="edit" onClick={()=> editTask(index)}>Edit</button>
         </li>
        ))}
     
      </ul>
      </div>
      </div>
    </>
  );
};

export default ToDoComponent;