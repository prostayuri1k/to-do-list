import {ADD_TODO, COMPLETE_TODO, DELETE_TODO, EDIT_TODO, UPDATE_TODO} from "../actions/todoListAction";

const initialState = {
    todos: []
}

const todoListReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(item => item.id !== action.payload)
            }
        case COMPLETE_TODO:
            return {
                ...state,
                todos: state.todos.map(item => item.id === action.payload ? {
                    ...item,
                    isCompleted: !item.isCompleted
                } : item)
            }
        case EDIT_TODO:
            return {
                ...state,
                todos: state.todos.map(item => item.id === action.payload ? {...item, isEdit: !item.isEdit} : item)
            }
        case UPDATE_TODO:
            return {
                ...state,
                todos: state.todos.map(item =>
                    item.id === action.payload.id
                        ?
                        {...item, isEdit: !item.isEdit, title: action.payload.text}
                        :
                        item
                )
            }
        default:
            return state
    }
}

export default todoListReducer;