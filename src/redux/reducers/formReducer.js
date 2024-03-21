import {ADD_TEXT} from "../actions/formActions";

const initialState = {
    text: ''
}
const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TEXT:
            return {
                ...state,
                text: action.payload
            }
        default:
            return state;
    }
}

export default formReducer;