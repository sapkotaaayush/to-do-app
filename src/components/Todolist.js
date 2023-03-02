import { useTodoContext } from "../providers/TodoProvider"
import { useContext } from "react";
const TodoList = () => {
  const todolist = useTodoContext();
  return (
    <div>
      {todolist.map((todo, index) => (
 
       <ul>
       <li key={index} > {todo}</li>
      </ul> 
  ))}
       </div>
  )
}

export default TodoList;