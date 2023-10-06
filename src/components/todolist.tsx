import React from 'react';
import TodoItem from './todoItem';
import { Todo } from '../features/todo/todoSlice';

interface TodoListProps {
    todos: Todo[];
}

const TodoList: React.FC<TodoListProps> = ({ todos }) => {
    return (
        <div>
            
            <ul>
                {todos.map((todo) => (
                    <li><TodoItem key={todo.id} todo={todo} />{todo.text}</li>
                ))}
            </ul>
        </div>

    );
};

export default TodoList;