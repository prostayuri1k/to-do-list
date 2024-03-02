import './App.css';
import TodoField from "./components/TodoForm/TodoField";
import Registration from "./Pages/Registration/Registration";
import Authorization from "./Pages/Authorization/Authorization";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route element={<Registration/>} path='/to-do-list'></Route>
            <Route element={<Authorization/>} path='/authorization'></Route>
            <Route element={<TodoField/>} path='/todo'></Route>
        </Routes>
    </div>
  );
}

export default App;
