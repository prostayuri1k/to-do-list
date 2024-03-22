import React from 'react';
import TodoForm from "../../components/TodoForm/TodoForm";
import {NavLink} from "react-router-dom";

const TodoPage = () => {
    const logout = () => {
        localStorage.removeItem('token');
    }

    return (
        <div className='App-container'>
            <div className='App-wrapper'>
                <div className='todo-field'>
                    <h1>Get things done!</h1>
                    <TodoForm/>
                </div>
            </div>
            <p><NavLink onClick={logout} to='/authorization'>Log Out</NavLink></p>
        </div>
    );
};

export default TodoPage;