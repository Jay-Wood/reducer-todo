export const initialState = {
    itemArray: [
      {
        text: "Pick up laundry",
        id: Date.now(),
        completed: false
      }
    ],
}

export default initialState;

export const listReducer = (state, action) => {
    console.log("Action", action)    
    switch (action.type) {
        case "ADD_ITEM": 
            const newItem = {
                text: action.payload,
                id: Date.now(),
                completed: false
            };
            return {
                ...state, 
                itemArray: [...state.itemArray, newItem]
            };

        case "CLEAR_COMPLETED":
            return {
                ...state, 
                itemArray: state.itemArray.filter(item => !item.completed)
            };

        case "TOGGLE_ITEM": {
            return {
                ...state, 
                itemArray: state.itemArray.map(item => {
                    if(item.id === action.payload) {
                        return {
                            ...item, 
                            completed: !item.completed
                        };
                    } else {
                        return item; 
                    }
                })
            }
        }              
        default: return state;
    }
}