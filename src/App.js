import './App.css';
import Registration from "./Pages/Registration/Registration";
import Authorization from "./Pages/Authorization/Authorization";
import { Route, Routes } from "react-router-dom";
import TodoPage from "./Pages/TodoPage/TodoPage";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route element={<Registration/>} path='/to-do-list'></Route>
            <Route element={<Authorization/>} path='/authorization'></Route>
            <Route element={<TodoPage/>} path='/todo'></Route>
        </Routes>
    </div>
  );
}

export default App;
