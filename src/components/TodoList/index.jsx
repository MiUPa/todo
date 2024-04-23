import { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      task: "タスク1",
      isCompleted: false
    },
    {
      id: 2,
      task: "タスク2",
      isCompleted: false
    }
  ])
  const [task, setTask] = useState("");
  return (
      <div>
        <h1>Todoリスト</h1>
        <lavel htmlFor="task">やること：</lavel>
        <input
          type="type"
          id="task"
          name="task"
          value={task}
          onChange={(e) => {
            setTask(e.target.value)
          }}
          />
        <button type="submit">
          追加
        </button>
        <ul>
          {todos.map((todo) => (
              <li key={todo.id}>
                <lavel>
                  <input type="checkbox" />
                  <span>{todo.task}</span>
                </lavel>
              </li>
          ))}
        </ul>
      </div>
  )
}

export default TodoList