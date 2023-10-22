import React, {useState}  from 'react'
import Button from '../button/Button'
import './TaskForm.css'

const TaskForm = ({addTask}) => {
    // useState para controlar a desrição e a categpria da tarefa
    // Valor inicial: vazio ('')
    const [description, setDescription] = useState('')
    const [category, setCategory] = useState('')

    
    // Função que controla a lógica de submissão do formulário
    // Parâmetros: (e) - captura o evento
    const handleSubmission = (e) => {
      // Impede que o formulário seja enviado da maneira tradicional
      e.preventDefault();

      // Caso algum dos campos estejam vazios, não continua a função
      if(!description || !category) return;
      
      // Função para criar tarefa nova
      addTask(description, category)

      //Função para limpa os campos do formulário
      setDescription('')
      setCategory('')

    }


  return (
    <div className='todo-form'>
      <h2>Create task</h2>
      <form onSubmit={handleSubmission}>
          <input 
          type='text' 
          placeholder='digite o título da tarefa' 
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          />
          <select 
          onChange={(e) => setCategory(e.target.value)}
          value={category}>
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