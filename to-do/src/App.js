import React, { useReducer } from 'react';
import { initialState, listReducer } from "./reducers/ToDoReducer";
import './App.css';
import ToDoList from "./components/ToDoList.js";
import ToDoForm from "./components/ToDoForm.js";


function App() {
  const [state, dispatch] = useReducer(listReducer, initialState);
  console.log("state in App", state)

  const addItem = item => {
    dispatch({type: "ADD_ITEM", payload: item});
  }

  const toggleItem = id => {
    dispatch({type: "TOGGLE_ITEM", payload: id})
  }

  const clearCompleted = () => {
    dispatch ({ type: "CLEAR_COMPLETED"});
  }
  
  return (
    <div className="App">
      <h1>To Do List</h1>
      <ToDoForm  clearCompleted={clearCompleted} addItem={addItem}/>
      <ToDoList toggleItem={toggleItem} itemArray={state.itemArray} />
    </div>
  );
}

export default App;
