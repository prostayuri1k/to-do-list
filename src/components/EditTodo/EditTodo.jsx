import React, {useState} from 'react';
import {Button, Input, Space} from "antd";
import {withLoggerEditItem} from "../withLogger/withLogger";

const EditTodo = ({title, id, update}) => {

    const [updatedTitle, setUpdatedTitle] = useState(title)
    return (
        <li>
            <Space.Compact
                style={{width: '100%'}}
            >
                <Input
                    placeholder='Update todo'
                    value={updatedTitle}
                    onChange={event => setUpdatedTitle(event.target.value)}
                    onPressEnter={() => update(id, updatedTitle)}
                />
                <Button
                    type={"primary"}
                    onClick={() => update(id, updatedTitle)}
                >Update
                </Button>
            </Space.Compact>
        </li>
    );
};

export default EditTodo;

export const EditTodoWithLogger = withLoggerEditItem(EditTodo);