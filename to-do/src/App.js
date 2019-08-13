import React from 'react';
import './App.css';
import ToDoList from "./components/ToDoList.js";
import ToDoForm from "./components/ToDoForm.js";


function App() {
  return (
    <div className="App">
      <h1>To Do List</h1>
      <ToDoForm />
      <ToDoList />
    </div>
  );
}

export default App;
