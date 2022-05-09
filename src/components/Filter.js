import React, { useContext } from 'react'
import { TodoContext } from './TodoContext'
import { ACTIONS } from './Todos'

const Filter = () => {

  const [, , , , filter, dispatchFilter] = useContext(TodoContext)

  const handleShowAll = () => {
    dispatchFilter({type: ACTIONS.SHOW_ALL})
  }
  
  const handleShowComplete = () => {
    dispatchFilter({type: ACTIONS.SHOW_COMPLETE})
  }

  const handleShowIncomplete = () => {
    dispatchFilter({type: ACTIONS.SHOW_INCOMPLETE})
  }


  return (

    <div>

      <button onClick={handleShowAll}>Show All</button>
      <button onClick={handleShowComplete}>Show Complete</button>
      <button onClick={handleShowIncomplete}>Show Incomplete</button>

    </div>

  )
}

export default Filter