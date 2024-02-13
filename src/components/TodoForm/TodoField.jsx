import React, {useState} from 'react';
import TodoList from "../TodoList/TodoList";
import {Button, Input, Space} from "antd";

const {v4: uuidv4} = require('uuid');


const TodoField = () => {

    const [todoTitle, setTodoTitle] = useState('')
    const [todos, setTodos] = useState([]);

    const addTodo = () => {
        if (todoTitle.trim()) {
            setTodos([
                ...todos,
                {
                    id: uuidv4(),
                    title: todoTitle,
                    completed: false,
                    isEdit: false
                }
            ]);
            setTodoTitle('');
        }
    }

    const removeTodo = (id) => {
        setTodos(todos.filter(item => item.id !== id));
    }

    const editTodo = (id) => {
        setTodos(
            todos.map(item => item.id === id ? {...item, isEdit: !item.isEdit} : item)
        )
    }

    const updateTodo = (id, task) => {
        setTodos(
            todos.map(item => item.id === id && task.trim() ? {...item, title: task, isEdit: !item.isEdit} : item)
        )
    }


    return (
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
            <TodoList todos={todos} edit={editTodo} remove={removeTodo} update={updateTodo}/>
        </div>
    );
};

export default TodoField;