import './App.css';
import TodoField from "./components/TodoForm/TodoField";
import Registration from "./Pages/Registration/Registration";
import Authorization from "./Pages/Authorization/Authorization";
import { Route, Routes} from "react-router-dom";

function App() {


  return (
    <div className="App">
        <Routes>
            <Route element={<Registration/>} path='/'></Route>
            <Route element={<Authorization/>} path='/authorization'></Route>
            <Route element={<TodoField/>} path='/todo'></Route>
        </Routes>
        {/*<TodoField/>*/}
        {/*<Authorization/>*/}
    </div>
  );
}

export default App;
