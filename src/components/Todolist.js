import { useTodoContext } from "../providers/TodoProvider"

const TodoList = () => {
  const {todoList} = useTodoContext();
  return (
    <div>
      {todoList.map((todo, index) => (
     <ul>
       <li key={index} > {todo}</li>
      </ul> 
      ))}
       </div>
  )
}

export default TodoList;