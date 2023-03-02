import { useTodoContext } from "../providers/TodoProvider";
const TodoForm = () => {
  const {getNumberOfTodo}= useTodoContext();
  return(
    <form>
      <h3> Number of todos: {getNumberOfTodo()}</h3>
      { <input type="text" placeholder="write here"/>}
      <button type="submit" >
        submit
      </button>

    </form>
    
  )
}
export default TodoForm;