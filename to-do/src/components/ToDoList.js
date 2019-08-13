import React, { useState, useReducer } from "react";
import ToDoItem from "./ToDoItem";
import { initialList, listReducer } from "../reducers/ToDoReducer";

const ToDoList = () => {

    const [newItemText, setNewItemText] = useState();

    // useReducer - takes in a reducer, and an initialState obj
    // returns - a state obj, and the dispatch fn
    const [state, dispatch] = useReducer(listReducer, initialList);
    console.log("State", state);

    const handleChanges = e => {
        setNewItemText(e.target.value);
      };

    

    return(
        <div>
            {console.log("state",state)}
            {state.itemArray.map(listItem => (
                <ToDoItem 
                    name={listItem.text}
                />
            ))}
        </div>
    )
}

export default ToDoList;