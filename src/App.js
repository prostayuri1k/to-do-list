import './App.css';
import TodoField from "./components/TodoForm/TodoField";

function App() {


  return (
    <div className="App">
      <div className='App-wrapper'>
        <h1>Get things done!</h1>
          <TodoField/>
      </div>
    </div>
  );
}

export default App;
