import {useState} from "react";

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

  const onSubmit = (e) => {
    e.preventDefault()
    const newId = todos.length > 0 ? Math.max(...todos.map((todo) => todo.id)) + 1 : 1
    const newTodo = {id: newId, task, isCompleted: false}
    setTodos((prevTodos) => [...prevTodos, newTodo])
    setTask("")
  }
  const handleToggleComplete = (id) => {
    setTodos((prevTodos) =>
        prevTodos.map((todo) => (todo.id === id ? {...todo, isCompleted: !todo.isCompleted} : todo))
    )
  }
  const handleDeleteCompletedTasks = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.isComleted))
  }
  return (
      <div>
        <h1>Todoリスト</h1>
        <form onSubmit={onSubmit}>
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
        </form>
        <ul>
          {todos.map((todo) => (
              <li key={todo.id}>
                <lavel>
                  <input type="checkbox"
                         checked={todo.isCompleted}
                         onChange={() => handleToggleComplete(todo.id)}
                  />
                  <span style={{textDecoration: todo.isCompleted ? 'line-through' : 'none'}}>{todo.task}</span>
                </lavel>
              </li>
          ))}
        </ul>
        <button type="button" onClick={handleDeleteCompletedTasks}>
          完了タスクを削除
        </button>
      </div>
  )
}

export default TodoList