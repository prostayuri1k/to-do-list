import React from 'react';
import {Button, Input, Space} from "antd";
import {useDispatch, useSelector} from "react-redux";
import {addText} from "../../redux/actions/formActions";
import {addTodo} from "../../redux/actions/todoListAction";

const TodoForm = () => {

    const dispatch = useDispatch();
    const {text} = useSelector(state => state.form);

    const onAddTask = () => {
        if (text.trim()) {
            dispatch(addTodo(text));
            dispatch(addText(''));
        }
    }

    return (
        <>
            <Space.Compact style={{width: '100%', marginBottom: '30px'}}>
                <Input
                    placeholder={'What is the task today?'}
                    value={text}
                    onChange={event => dispatch(addText(event.target.value))}
                    onPressEnter={onAddTask}
                />
                <Button type={"primary"} onClick={onAddTask}>Add task</Button>
            </Space.Compact>
        </>
    );
};

export default TodoForm;