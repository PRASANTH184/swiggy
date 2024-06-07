import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
    name: 'TodoReducer',
    initialState: {
        items: [],
      },
    reducers: {
        addItem: (state, action) => {
           state.items.push(action.payload);
        }
        // editItem: (state, action) => {
        //     const { id, newText } = action.payload;
        //     const existingTodo = state.find(todo => todo.id === id);
        //     if (existingTodo) {
        //         existingTodo.text = newText;
        //     }
        // },
        // removeItem: (state, action) => {
        //     const idToRemove = action.payload;
        //     return state.filter(todo => todo.id !== idToRemove);
        // }
    }
});

export const { addItem, editItem, removeItem } = TodoSlice.actions;
export default TodoSlice.reducer;
