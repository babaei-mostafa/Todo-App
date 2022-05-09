import React, { useReducer, useState } from 'react'
import {v4 as uuidv4} from "uuid"
import './Todo.scss'
import { TodoContext } from './TodoContext'
import TodoForm from './TodoForm'
import Filter from './Filter'
import TodoList from './TodoList'

const initialTodos = [
  {
    id: uuidv4(),
    task: "Do the dishes",
    complete: false
  },
  {
    id: uuidv4(),
    task: "Feed the dog",
    complete: true
  },  
]

export const ACTIONS = {
  DD_TODO: 'add-todo',
  TOGGLE_TODO: 'toggle-todo',
  DELETE_TODO: 'delete-todo',
  SHOW_ALL: 'show-all',
  SHOW_COMPLETE: 'show-complete',
  SHOW_INCOMPLETE: 'show-incomplete'
}

const todosReducer = (todos, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.task)]
    case ACTIONS.TOGGLE_TODO:
      return todos.map(todo => {
        if (todo.id === action.payload.id) {
          return {...todo, complete: !todo.complete}
        } else {
          return todo
        }
      })
    case ACTIONS.DELETE_TODO:
      return todos.filter(todo => 
        todo.id !== action.payload.id
      )
    default:
      throw new Error()
  }
};

const newTodo = task => { 
  return {id: uuidv4(), task: task, complete: false}
}

const filterReducer = (filter, action) => {
  switch (action.type) {
    case ACTIONS.SHOW_ALL:
      return 'All'
    case ACTIONS.SHOW_COMPLETE:
      return 'Complete'
    case ACTIONS.SHOW_INCOMPLETE:
      return 'Incomplete'
    default:
      throw new Error()
  }
}

const Todos = () => {

  const [task, setTask] = useState("")
  const [todos, dispatchTodos] = useReducer(todosReducer, initialTodos)
  const [filter, dispatchFilter] = useReducer(filterReducer, 'All')

  const contexts = [task, setTask, todos, dispatchTodos, filter, dispatchFilter]

  return (

    <div>
      <TodoContext.Provider value={contexts}>
        <TodoForm />
        <Filter />
        <TodoList />
      </TodoContext.Provider>
    </div>

  )
}

export default Todos