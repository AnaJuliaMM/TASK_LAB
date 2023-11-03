import React from 'react'
import Button from '../button/Button'
import './Task.css'

const Task = ({task, removeTask, completeTask}) => {
  return (
    <div className='task' style={{textDecoration: task.isDone? "line-through" : 'none' }}>
      <span className='category-color'> <p className='category'>{task.category}</p></span>
      <div className='task-content'>
        <p>{task.description}</p>
      </div>
      <div className='checkbox'>
        <input type="checkbox" name="is-done" id="is-done" />
        <Button style={{backgroundColor: '#FF3434'}} value='X' type='button'/>
       
        
    </div>
  </div>
  )
}

export default Task


// {/* <Button onClick={() => completeTask(task.id)} style={{ backgroundColor: '#5cb85c'}} value='Done' type='button'/>
//         <Button onClick={() => removeTask(task.id)} style={{backgroundColor: '#d9534f'}} value='X' type='button'/> */}