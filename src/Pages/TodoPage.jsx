import React from 'react';
import TodoForm from "../components/TodoForm/TodoForm";
import TodoList from "../components/TodoList/TodoList";

const TodoPage = () => {
    return (
        <div className='todo-field'>
            <h1>Get things done!</h1>
            <TodoForm/>
            {<TodoList/>}
        </div>
    );
};

export default TodoPage;