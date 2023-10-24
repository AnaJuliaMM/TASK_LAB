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
        <Button onClick={() => completeTask(task.id)} style={{ backgroundColor: '#5cb85c'}} value='Done' type='button'/>
        <Button onClick={() => removeTask(task.id)} style={{backgroundColor: '#d9534f'}} value='X' type='button'/>
    </div>
  </div>
  )
}

export default Task

