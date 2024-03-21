export const ADD_TEXT = 'ADD_TEXT';
export const EDIT_TEXT = 'EDIT_TEXT';

export const addText = (text) => {
    return {
        type: ADD_TEXT,
        payload: text
    }
}

export const editTask = (text) => {
    return {
        type: EDIT_TEXT,
        payload: text
    }
}