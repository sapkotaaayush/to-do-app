import {createContext, useState, useContext} from "react";
const TodoContext = createContext();


const TodoProvider = ({children}) => {

  const initialValue = ["learning react"];

  const [todoList, settodoList] = useState(initialValue);

  const getNumberOfTodo = () => todoList.length;

  const contextValue = 
  {todoList, 
  getNumberOfTodo,
  };
  return (
    <TodoContext.Provider value ={contextValue}>
        {children}
    </TodoContext.Provider>
  )
}

export default TodoProvider;
export  const useTodoContext = () => useContext(TodoContext);