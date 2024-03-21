import React from 'react';
import {Button, Input, Space} from "antd";
import {withLoggerEditItem} from "../withLogger/withLogger";
import {useDispatch, useSelector} from "react-redux";
import {addText} from "../../redux/actions/formActions";
import {updateTodo} from "../../redux/actions/todoListAction";

const EditTodo = ({id}) => {

    const dispatch = useDispatch();
    const {text} = useSelector(state => state.form)

    return (
        <li>
            <Space.Compact
                style={{width: '100%'}}
            >
                <Input
                    placeholder='Update todo'
                    value={text}
                    onChange={event => dispatch(addText(event.target.value))}
                    onPressEnter={() => dispatch(updateTodo(id, text))}
                />
                <Button
                    type={"primary"}
                    onClick={() => dispatch(updateTodo(id, text))}
                >Update
                </Button>
            </Space.Compact>
        </li>
    );
};

export default EditTodo;

export const EditTodoWithLogger = withLoggerEditItem(EditTodo);