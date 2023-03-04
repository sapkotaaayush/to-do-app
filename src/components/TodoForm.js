import { useState } from "react";
import { useTodoContext } from "../providers/TodoProvider";


const TodoForm = () => {


  const {getNumberOfTodo, addTodo}= useTodoContext();

  const [todoItem, setTodoItem] = useState("");

const onChangeFunction = (event) => {
  setTodoItem(event.target.value) };


    const handleSubmit = (event) => {
      event.preventDefault(); 
      addTodo(todoItem)
      if(!todoItem) {
        return;
      }
    };


  return(
    <form onSubmit={handleSubmit}>
      <h3> Number of todos: {getNumberOfTodo()}</h3>
      { <input 
      type="text" value={todoItem} placeholder="write here" onChange ={onChangeFunction}/>}
      <button type="submit" >
        submit
      </button>

    </form>
    
  )
}
export default TodoForm;