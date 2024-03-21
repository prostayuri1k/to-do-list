import {combineReducers, legacy_createStore as createStore} from "redux";
import formReducer from "./reducers/formReducer";
import todoListReducer from "./reducers/todoListReducer";
import {composeWithDevTools} from "@redux-devtools/extension";


const rootReducer = combineReducers({
    form: formReducer,
    todos: todoListReducer
})

const store = createStore(rootReducer, composeWithDevTools());

export default store;

