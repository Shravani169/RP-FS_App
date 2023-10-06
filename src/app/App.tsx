import React from 'react';
import TodoListContainer from '../features/todo/todolistContainer';
import TodoList from '../components/todolist';

function App() {
  const todos = [
    { id: 1, text: 'Todo 1', completed: true },
    { id: 2, text: 'todo 2', completed: false },
  ]
  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoListContainer />
      <div>
        <TodoList todos={todos} />
      </div>
    </div>
  );
}

export default App;