const {v4: uuidv4} = require('uuid');

export const ADD_TODO = 'ADD_TODO';
export const DELETE_TODO = 'DELETE_TODO';

export const  COMPLETE_TODO = 'COMPLETE_TODO';

export const EDIT_TODO = 'EDIT_TODO';

export const UPDATE_TODO = 'UPDATE_TODO';

export const addTodo = (newTodoText) => {
    return {
        type: ADD_TODO,
        payload: {
            title: newTodoText,
            id: uuidv4(),
            isCompleted: false,
            isEdit: false
        }
    }
}

export const deleteTodo = (id) => {
    return {
        type: DELETE_TODO,
        payload: id
    }
}

export const completeTodo = (id) => {
    return {
        type: COMPLETE_TODO,
        payload: id
    }
}

export const editTodo = (id) => {
    return {
        type: EDIT_TODO,
        payload: id
    }
}

export const updateTodo = (id, text) => {
    return {
        type: UPDATE_TODO,
        payload: {
            id: id,
            text: text
        }
    }
}
