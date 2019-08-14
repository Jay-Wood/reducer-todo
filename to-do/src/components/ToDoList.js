import React from "react";

const ToDoList = ( {itemArray, toggleItem} ) => {
    return(
        <div>
            {itemArray.map(listItem => (
                <div key={listItem.id}
                    onClick={() => toggleItem(listItem.id)}
                    className={listItem.completed ? "completed" : ""}
                >
                    {listItem.text}                                                
                </div>
            ))}
        </div>
    )
}

export default ToDoList;