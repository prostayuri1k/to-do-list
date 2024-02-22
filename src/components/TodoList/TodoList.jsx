import React from 'react';
import {TodoItemWithLogger} from "../TodoItem/TodoItem";
import {EditTodoWithLogger} from "../EditTodo/EditTodo";


const TodoList = ({todos , remove, edit, update}) => {

    return (
            <div>
                {todos.map(item => item.isEdit ? <EditTodoWithLogger key={item.id} {...item} update={update}/> : <TodoItemWithLogger edit={edit}  remove={remove} key={item.id} {...item}/>)}
            </div>
    );
};

export default TodoList;