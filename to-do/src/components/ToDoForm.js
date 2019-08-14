import React, { useState, useReducer } from "react";
import ToDoItem from "./ToDoItem";
import { initialList, listReducer } from "../reducers/ToDoReducer";

const ToDoForm = (props) => {
    const [newItemText, setNewItemText] = useState();
    const [state, dispatch] = useReducer(listReducer, initialList);

    const handleChanges = e => {
        setNewItemText(e.target.value);
    };
    
    return (
        // <form 
            // onSubmit={this.submitItem}
        // >
        <div>
            <input 
                type="text" 
                placeholder="Add new item"
                name="item"
                // value={props.state.item}
                onChange={handleChanges}
            />
            <button onClick={ () => dispatch({ type: "ADD_ITEM", payload: newItemText})}>Add Item</button>
            <button>Clear Completed Items</button>
        </div>
        // </form>
    )

} 

export default ToDoForm;