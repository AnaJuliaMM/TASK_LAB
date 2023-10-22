import React from 'react'
import Button from '../button/Button'

const Task = ({task}) => {
  return (
    <div className='task'>
        <div className='content'>
        <p>{task.description}</p>
        <p className='category'>{task.category}</p>
        </div>
    <div>
        <Button className='done' value='Done' type='button'/>
        <Button className='remove' value='X' type='button'/>
    </div>
  </div>
  )
}

export default Task

