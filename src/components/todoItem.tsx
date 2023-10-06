import React from 'react';
import { Todo, addTodo } from '../features/todo/todoSlice';

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  return (
    <li>
      <input type="checkbox" checked={todo.completed} readOnly />
      {todo.text}
    </li>
  );
};

export default TodoItem;