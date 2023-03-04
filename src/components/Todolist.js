import { useTodoContext } from "../providers/TodoProvider"

const TodoList = () => {
  const {todoList, removeTodo} = useTodoContext();
  return (
    <div>
      {todoList.map((todo, index) => (
     <ul>
       <li key={index} > {todo}
        <button  onClick={ () => removeTodo(index)}> x</button>

       </li>
      </ul> 
      ))}
       </div>
  )
}

export default TodoList;