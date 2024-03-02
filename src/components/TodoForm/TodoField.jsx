import React, {useEffect, useState} from 'react';
import TodoList from "../TodoList/TodoList";
import {Button, Input, Space} from "antd";
import {NavLink} from "react-router-dom";
import axios from "axios";

const TodoField = () => {

    const [todoTitle, setTodoTitle] = useState('')
    const [todos, setTodos] = useState([]);

    const fetchTodos = async () => {
        try {
            let response = await axios.get(
                'https://todo-redev.herokuapp.com/api/todos',
                {
                    method: "GET",
                    headers: {
                        'accept': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                }
            );
            setTodos(response.data)
        } catch (error) {
            console.log('Ошибка', error)
        }
    }

    useEffect(() => {
        fetchTodos();
    }, []);

    const addTodo = async () => {
        if (!todoTitle.trim()) return;
        let newTodo = {title: todoTitle};

        try {
            const response = axios.post(
                'https://todo-redev.herokuapp.com/api/todos',
                newTodo,
                {
                    headers: {
                        'accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                }
            )
            const addedTask = (await response).data;
            setTodos(prevTodos => [...prevTodos, addedTask]);
            setTodoTitle('');
        } catch (error) {
            console.log('Ошибка', error);
        }
    }

    const removeTodo = async (id) => {
        try {
            await axios.delete(
                `https://todo-redev.herokuapp.com/api/todos/${id}`,
                {
                    headers: {
                        'accept': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                }
            )
            setTodos(todos.filter(item => item.id !== id));
        } catch (error) {
            console.log('Ошибка', error);
        }
    };

    const completeTodo = async (id) => {
        try {
            await axios.patch(
                `https://todo-redev.herokuapp.com/api/todos/${id}/isCompleted`,
                id,
                {
                    headers: {
                        'accept': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('token')}`
                    }
                }
            )
        } catch (error) {
            console.log(error)
        }
        setTodos(
            todos.map(item => item.id === id ? {...item, isCompleted: !item.isCompleted} : item)
        )
    }

    const editTodo = (id) => {
        setTodos(
            todos.map(item => item.id === id ? {...item, isEdit: !item.isEdit} : item)
        )
    }

    const updateTodo = async (id, task) => {
        try {
            await axios.patch(
                `https://todo-redev.herokuapp.com/api/todos/${id}`,
                {title: task},
                {
                    headers: {
                        'accept': 'application/json',
                        'Authorization': `Bearer ${localStorage.getItem('token')}`,
                        'Content-Type': 'application/json'
                    }
                }
            )
        } catch (error) {
            console.log(error)
        }
        setTodos(
            todos.map(item => item.id === id && task.trim() ? {...item, title: task, isEdit: !item.isEdit} : item)
        )
    }

    const logout = () => {
        localStorage.removeItem('token');
    }

    return (
        <div className='App-container'>
            <div className='App-wrapper'>
                <h1>Get things done!</h1>
                <div className='todo-field'>
                    <Space.Compact
                        style={{width: '100%', marginBottom: '30px'}}
                    >
                        <Input
                            placeholder='What is the task today?'
                            value={todoTitle}
                            onChange={event => setTodoTitle(event.target.value)}
                            onPressEnter={addTodo}
                        />
                        <Button
                            type={"primary"}
                            onClick={addTodo}
                        >Add task
                        </Button>
                    </Space.Compact>
                    {todos?.length ? (
                        <TodoList todos={todos} edit={editTodo} remove={removeTodo} update={updateTodo}
                                  complete={completeTodo}/>) : (<></>)}
                </div>
            </div>
            <p><NavLink onClick={logout} to='/authorization'>Log Out</NavLink></p>
        </div>
    );
};

export default TodoField;