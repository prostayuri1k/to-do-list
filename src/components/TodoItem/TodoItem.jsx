import React from 'react';
import {Button, Space} from "antd";
import {DeleteFilled, EditFilled} from "@ant-design/icons";
import './TodoItem.css'
import {withLoggerTodoItem} from "../withLogger/withLogger";
import {useDispatch} from "react-redux";
import {completeTodo, deleteTodo, editTodo} from "../../redux/actions/todoListAction";
import {editTask} from "../../redux/actions/formActions";

const TodoItem = ({title, id, isCompleted}) => {

    const dispatch = useDispatch();
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
                    onClick={() => dispatch(completeTodo(id))}
                >
                    {title}
                </Button>
                <Button onClick={() => {
                    dispatch(editTodo(id));
                    dispatch(editTask(title))
                }}>
                    <EditFilled/>
                </Button>
                <Button onClick={() => dispatch(deleteTodo(id))}>
                    <DeleteFilled/>
                </Button>
            </Space.Compact>
        </li>
    );
};

export default TodoItem;

export const TodoItemWithLogger = withLoggerTodoItem(TodoItem);