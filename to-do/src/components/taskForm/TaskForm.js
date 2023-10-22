import React from 'react'
import Button from '../button/Button'
import './TaskForm.css'

const TaskForm = () => {
  return (
    <div className='todo-form'>
      <h2>Create task</h2>
      <form>
          <input type='text' placeholder='digite o título da tarefa'/>
          <select>
              <option value=''></option>
              <option value='Profissional'>Profissional</option>
              <option value='Acadêmica'>Acadêmica</option>
              <option value='Pessoal'>Pessoal</option>
              <option value='Espiritual'>Espiritual</option>
          </select>
          <Button  type='submit' value='Create'/>
      </form>
    </div>
    
  )
}

export default TaskForm