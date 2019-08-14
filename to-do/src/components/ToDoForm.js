import React, { useState } from "react";

const ToDoForm = ( { addItem, clearCompleted } ) => {
    const [newItemText, setNewItemText] = useState("");

    const handleChanges = e => {
        setNewItemText(e.target.value);
    };
    const handleSubmit = e => {
        e.preventDefault();
        addItem(newItemText);
        setNewItemText("");
    }
    
    const handleClear = e => {
        e.preventDefault();
        clearCompleted();
    }

    return (
        <form 
            onSubmit={handleSubmit}
        >
            <input 
                type="text" 
                placeholder="Add new item"
                name="item"
                value={newItemText}
                onChange={handleChanges}
            />
            <button type="submit"> Add Item</button>
            <button onClick={handleClear}>Clear Completed Items</button>
        </form>
    )

} 

export default ToDoForm;