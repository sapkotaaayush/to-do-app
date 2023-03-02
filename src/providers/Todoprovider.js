import {createContext, useState, useContext} from "react";
const TodoContext = createContext();


export const TodoProvider = ({children}) => {

  const initialValue = ["learning react"];
  const [todoList, settodoList] = useState(initialValue);

  return (
    <TodoContext.Provider value ={todoList}>
        {children}
    </TodoContext.Provider>
  )
}

export default TodoProvider;
export  const useTodoContext = () => useContext(TodoContext);