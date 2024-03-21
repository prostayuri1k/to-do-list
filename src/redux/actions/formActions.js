export const ADD_TEXT = 'ADD_TEXT';

export const addText = (text) => {
    return {
        type: ADD_TEXT,
        payload: text
    }
}