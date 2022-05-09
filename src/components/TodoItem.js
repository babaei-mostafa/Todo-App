import React, { useContext } from 'react'
import { TodoContext } from './TodoContext'
import { ACTIONS } from './Todos'

const TodoItem = ({todo}) => {

  const [, , , dispatchTodos] = useContext(TodoContext)

  const handleToggle = id => {
    dispatchTodos({type: ACTIONS.TOGGLE_TODO, payload: {id: id}})
  }

  const handleClick = id => {
    dispatchTodos({type: ACTIONS.DELETE_TODO, payload: {id: id}})
  }

  return (
    
    <div>
    
      <span>{todo.task}</span>
      <input
        type='checkbox'
        checked={todo.complete}
        onChange={() =>handleToggle(todo.id)}
      />
      <button onClick={()=>handleClick(todo.id)}>Delete</button>
    
    </div>
  )
}

export default TodoItem