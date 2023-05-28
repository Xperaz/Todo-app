import "./styles.css";
import { Todo } from "../model";
import SingleTodo from "./SingleTodo";

interface Props {
    todos: Todo[],
    setTodos : React.Dispatch<React.SetStateAction<Todo[]>>,
}

const TodoList = ({todos, setTodos} : Props) => {
  return (
    <div className="todos">
      {todos.map((td) => (
        // <li key={td.id}>{td.todo}</li>
        <SingleTodo 
            todo={td}
            key={td.id}
            todos={todos}
            setTodos={setTodos}
        />
      ))}
    </div>
  )
}

export default TodoList
