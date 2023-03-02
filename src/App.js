import TodoProvider from "./providers/TodoProvider";
import TodoList from './components/TodoList';

function App() 
  {
    return (
      <div className="App" style = 
      {{
        display: "flex",
        justifyContent: "center",
        alignText: "center",
      }}>
 <header> TO-DO App</header>

 <TodoProvider>
 <TodoList/>
 </TodoProvider>


 </div>
    )
  }

export default App;

