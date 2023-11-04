import React from 'react'
import Button from '../button/Button'
import './Task.css'

const Task = ({task, removeTask, completeTask}) => {
  return (
    <div className='task' >
      <span className='category-color'></span>
      <div className='task-content'>
        <p style={{textDecoration: task.isDone &&  "line-through", color: task.isDone && '#868686'}}>{task.description}</p>
      </div>
      <div className='checkbox'>
        <input type="checkbox" name="is-done" id="is-done" onChange={() => completeTask(task.id)} 
        checked={task.isDone}/>
        <Button onClick={()=> removeTask(task.id)} style={{backgroundColor: '#FF3434'}} value='X' type='button'/>
    </div>
  </div>
  )
}

export default Task


