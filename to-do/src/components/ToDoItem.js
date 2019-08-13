import React, { useState, useReducer } from "react";
import { initialList, listReducer } from "../reducers/ToDoReducer";

const ToDoItem = (props) => {

    return (

        <div 
            className="to-do-item"
        >
             <p>{props.name}</p>
             <button 
                // onClick={() => props.completeItem(props.key)} 
                >Complete Item
             </button>
             {console.log("state inside ToDoItem", props)}
        </div>

    )
}

export default ToDoItem;