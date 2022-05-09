import React, { useContext } from 'react'
import { TodoContext } from './TodoContext'
import { ACTIONS } from './Todos'

const TodoForm = () => {

  const [task, setTask, todos, dispatchTodos] = useContext(TodoContext)

  const handleSubmit = e => {
    e.preventDefault()
    dispatchTodos({type: ACTIONS.ADD_TODO, payload: {task: task}})
    setTask("")
  }

  console.log(todos)

  return (

    <div>
      
      <form onSubmit={handleSubmit}>
        <label>Add Todo</label>
        <input
          type='text'
          value={task}
          onChange={e => setTask(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>

    </div>
  )
}

export default TodoForm