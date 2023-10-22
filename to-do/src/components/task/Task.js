import React from 'react'
import Button from '../button/Button'
import './Task.css'

const Task = ({task, removeTask, completeTask}) => {
  return (
    <div className='task' style={{textDecoration: task.isDone? "line-through" : 'none' }}>
        <div className='content'>
        <p>{task.description}</p>
        <p className='category'>{task.category}</p>
        </div>
    <div>
        <Button onClick={() => completeTask(task.id)} className='done' value='Done' type='button'/>
        <Button onClick={() => removeTask(task.id)} className='remove' value='X' type='button'/>
    </div>
  </div>
  )
}

export default Task

