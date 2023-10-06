import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios'; // Import axios
import { AppDispatch } from '../../app/store';

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const initialState: Todo[] = [];

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      // Handle adding a new todo
    },
    // Define other actions for updating and deleting todos here
  },
});

export const { addTodo } = todoSlice.actions;

// Thunk action to fetch todos from the backend
export const fetchTodos:any = () => async (dispatch: AppDispatch) => {
  try {
    const response = await axios.get('/api/todos'); // Replace with your backend URL
    dispatch({ type: 'todo/addTodo', payload: response.data });
  } catch (error) {
    console.error('Error fetching todos:', error);
  }
};

// Add other thunk actions for updating and deleting todos here

export default todoSlice.reducer;