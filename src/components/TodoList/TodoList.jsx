import React from 'react';
import TodoItem, {TodoItemWithLogger} from "../TodoItem/TodoItem";
import EditTodo, {EditTodoWithLogger} from "../EditTodo/EditTodo";
import {useSelector} from "react-redux";


const TodoList = () => {
    const {todos} = useSelector(state => state.todos)

    return (
            <div>
                {todos.map(
                    item => item.isEdit
                        ?
                        <EditTodo key={item.id} {...item}/>
                        :
                        <TodoItem key={item.id} {...item}/>)}
            </div>
    );
};

export default TodoList;