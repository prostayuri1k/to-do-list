import React from 'react';
import TodoItem from "../TodoItem/TodoItem";
import EditTodo from "../EditTodo";


const TodoList = ({todos , remove, edit, update}) => {

    return (
        <div>
            {todos.map(item => item.isEdit ? <EditTodo key={item.id} {...item} update={update}/> : <TodoItem edit={edit}  remove={remove} key={item.id} {...item}/>)}
        </div>
    );
};

export default TodoList;