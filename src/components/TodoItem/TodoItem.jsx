import React from 'react';
import {Button, Space} from "antd";
import {DeleteFilled, EditFilled} from "@ant-design/icons";
import './TodoItem.css'
import {withLoggerTodoItem} from "../withLogger/withLogger";

const TodoItem = ({title, id, isCompleted, remove, edit, handleTask, complete}) => {

    const cls = ['todo'];

    if (isCompleted) {
        cls.push('completed');
    }

    return (
        <li className={cls.join(' ')}>
            <Space.Compact
                style={{width: '100%'}}
            >
                <Button
                    className='todo-btn'
                    style={{display: 'block', width: '100%'}}
                    onClick={() => {
                        complete(id);
                        handleTask(isCompleted);
                    }}
                >
                    {title}
                </Button>
                <Button onClick={() => edit(id)}>
                    <EditFilled/>
                </Button>
                <Button onClick={() => remove(id)}>
                    <DeleteFilled/>
                </Button>
            </Space.Compact>
        </li>
    );
};

export default TodoItem;

export const TodoItemWithLogger = withLoggerTodoItem(TodoItem);