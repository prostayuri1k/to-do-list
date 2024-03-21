import React from 'react';
import {Button, Input, Space} from "antd";
import {withLoggerEditItem} from "../withLogger/withLogger";
import {useDispatch, useSelector} from "react-redux";
import {editTask} from "../../redux/actions/formActions";
import {updateTodo} from "../../redux/actions/todoListAction";

const EditTodo = ({id}) => {

    const dispatch = useDispatch();
    const {editText} = useSelector(state => state.form);

    const onUpdateTask = () => {
        if (editText.trim()) {
            dispatch(updateTodo(id, editText));
            dispatch(editTask(''));
        }
    }

    return (
        <li>
            <Space.Compact style={{width: '100%'}}>
                <Input
                    placeholder='Update todo'
                    value={editText}
                    onChange={event => dispatch(editTask(event.target.value))}
                    onPressEnter={onUpdateTask}
                />
                <Button type={"primary"} onClick={onUpdateTask}>Update</Button>
            </Space.Compact>
        </li>
    );
};

export default EditTodo;

export const EditTodoWithLogger = withLoggerEditItem(EditTodo);