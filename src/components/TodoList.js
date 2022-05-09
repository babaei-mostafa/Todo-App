import React, { useContext } from 'react'
import { TodoContext } from './TodoContext'
import TodoItem from './TodoItem'

const TodoList = () => {

  const [, , todos, , filter, dispatchFilter] = useContext(TodoContext)

  const filteredTodos = todos.filter(todo => {
    if (filter === 'All') {
      return true
    }
    if (filter === 'Complete' && todo.complete) {
      return true
    }
    if (filter === 'Incomplete' && !todo.complete)
    return true
  })

  return (

    <div>
      <p>All Todos</p>
      <ul>
        {filteredTodos.map(todo => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  )
}

export default TodoList