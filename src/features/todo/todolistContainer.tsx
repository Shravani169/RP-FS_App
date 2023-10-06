import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../app/rootReducer';
import { addTodo, fetchTodos } from './todoSlice';
import TodoList from '../../components/todolist';

const TodoListContainer: React.FC = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state: RootState) => state.todo);

    useEffect(() => {
        dispatch(fetchTodos()); 
    }, [dispatch]);

    const handleAddTodo = (text: string) => {
        dispatch(addTodo(text));
    };

    return (
        <div>
            <div>
                <input type="text" />
                <button onClick={() => handleAddTodo('New Todo')}>Add</button>
            </div>
            <div>
                <h1><TodoList todos={todos} /></h1>
            </div>

        </div>
    );
};

export default TodoListContainer;
