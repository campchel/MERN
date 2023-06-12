import TodoList from './components/TodoListComponent';
import './App.css';
import './components/css/styles.css';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <h1>To Do List</h1>
      <TodoList/>
    </div>
  );
}

export default TodoList;
