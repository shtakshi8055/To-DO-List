import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");
  const [date, setDate] = useState(new Date());
  const [editingIndex, setEditingIndex] = useState(null);

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, { task, date }]);
      setTask("");
      setDate(new Date());
    }
  };

  const removeTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const startEditing = (index) => {
    setEditingIndex(index);
    setTask(tasks[index].task); // Populate task input with current task value
    setDate(new Date(tasks[index].date)); // Populate date input with current date value
  };

  const cancelEditing = () => {
    setEditingIndex(null);
    setTask("");
    setDate(new Date());
  };

  const saveTask = (index) => {
    const updatedTasks = tasks.map((t, i) =>
      i === index ? { task, date } : t
    );
    setTasks(updatedTasks);
    setEditingIndex(null);
    setTask("");
    setDate(new Date());
  };

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <div className="input-group">
        <input 
          type="text" 
          value={task} 
          onChange={(e) => setTask(e.target.value)} 
          placeholder="Add Task" 
        />
        <div className="calendar-icon">
          <DatePicker
            selected={date}
            onChange={(date) => setDate(date)}
            dateFormat="dd/MM/yyyy"
            customInput={<button className="calender">📅</button>}
          />
        </div>
        {editingIndex === null ? (
          <button className="add" onClick={addTask}>Add</button>
        ) : (
          <>
            <button className="save" onClick={() => saveTask(editingIndex)}>Save</button>
            <button className="cancel" onClick={cancelEditing}>Cancel</button>
          </>
        )}
      </div>
      <ul>
        {tasks.map((taskItem, index) => (
          <li key={index} className="task">
            {editingIndex === index ? (
              <div className="task-content">
                <input
                  type="text"
                  value={task}
                  onChange={(e) => setTask(e.target.value)}
                />
                <DatePicker
                  selected={date}
                  onChange={(date) => setDate(date)}
                  dateFormat="dd/MM/yyyy"
                />
              </div>
            ) : (
              <>
                <span>{taskItem.task}</span>
                <span className="task-date">{taskItem.date.toDateString()}</span>
                <div className="task-buttons">
                  <button className="remove" onClick={() => removeTask(index)}>Remove</button>
                  <button className="edit" onClick={() => startEditing(index)}>Edit</button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
