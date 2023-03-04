import TodoProvider from "./providers/TodoProvider";
import TodoList from './components/TodoList';
import TodoForm from "./components/TodoForm";

function App() 
  {
    return (
      <div className="App" style = 
      {{
        display: "flex",
        justifyContent: "center",
        alignText: "center",
        flexDirection: "column",
      }}>
 <header> TO-DO App</header>


 <TodoProvider>
 <TodoForm/>
 <TodoList/>
 </TodoProvider>


 </div>
    )
  }

export default App;

