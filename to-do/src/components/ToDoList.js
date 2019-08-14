import React, { useState, useReducer, useEffect } from "react";
import ToDoItem from "./ToDoItem";
import { initialList, listReducer } from "../reducers/ToDoReducer";

const ToDoList = () => {
    // useReducer - takes in a reducer, and an initialState obj
    // returns - a state obj, and the dispatch fn
    const [state, dispatch] = useReducer(listReducer, initialList);
    console.log("State", state);

        return(
            <div>
                {console.log("state",state)}
                {state.itemArray.map(listItem => (
                    <ToDoItem 
                        name={listItem.text}
                        key={listItem.id}
                        completed={listItem.completed}
                        editing={listItem.editing}
                    />
                ))}
            </div>
        )

}

export default ToDoList;