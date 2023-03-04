import {createContext, useState, useContext} from "react";
const TodoContext = createContext();

const initialValue = ["learning react"];
const TodoProvider = ({children}) => {

  const [todoList, setTodoList] = useState(initialValue);

  const getNumberOfTodo = () => todoList.length;

  const addTodo = (newTodoItem) => {
    setTodoList([...todoList, newTodoItem]);
  };

  const removeTodo = (todoIndex) => {
    const newList = todoList.filter((_, index) => 
    index !== todoIndex);
    setTodoList(newList);

  }


  const contextValue = 
  {todoList, 
  getNumberOfTodo,
  addTodo,
  removeTodo,
  };
  return (
    <TodoContext.Provider value ={contextValue}>
        {children}
    </TodoContext.Provider>
  )
}

export default TodoProvider;
export  const useTodoContext = () => useContext(TodoContext);