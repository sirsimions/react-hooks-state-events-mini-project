import React from 'react'

function Task(props) {

  const deleteTask = ({ target }) => {
    const itemToDel = target.previousSibling.textContent

    props.setTasks((prev) => prev.filter((task) => task.text !== itemToDel))
  }

  return (
    <div className='task'>
      <div className='label'>{props.category}</div>
      <div className='text'>{props.text}</div>
      <button className='delete' onClick={deleteTask}>
        X
      </button>
    </div>
  )
}

export default Task



  