import {ADD_TEXT, EDIT_TEXT} from "../actions/formActions";

const initialState = {
    text: '',
    editText: ''
}

const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TEXT:
            return {
                ...state,
                text: action.payload
            }
        case EDIT_TEXT:
            return {
                ...state,
                editText: action.payload
            }
        default:
            return state;
    }
}

export default formReducer;