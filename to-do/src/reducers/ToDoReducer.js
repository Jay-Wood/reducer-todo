import React from "react";

export const initialList = {
    itemArray: [
      {
        text: "Pick up laundry",
        editing: false,
        id: Date.now(),
        completed: false
      },
      {
        text: "Sick up laundry",
        editing: false,
        id: Date.now(),
        completed: false
      },
      {
        text: "Quick up laundry",
        editing: false,
        id: Date.now(),
        completed: false
      },
    ]
}

export default initialList;

export const listReducer = (state, action) => {
    

 switch (action.type) {
     case "TOGGLE_EDITING":
         return {
             ...state, 
             editing: !state.editing
         };
     case "ADD_ITEM": {
        const newItem = {
            text: action.payload,
            editing: false,
            id: Date.now(),
            completed: false
        }
        return {
            ...state, newItem
            // editing: !state.editing
        };
     }; 
     case "ADD_ITEM": {
         return {

        };
     };
    default: return state;
 }
}