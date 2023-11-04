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
      if(!description || !category){
        window.alert('Campos vazios!')
        return;
      } 
      
      // Função para criar tarefa nova
      addTask(description, category)

      //Função para limpa os campos do formulário
      setDescription('')
      setCategory('')

    }


  return (
    <>
      <form className='create_task_form' onSubmit={handleSubmission}>
          <input 
          type='text' 
          placeholder='Digite uma nova tarefa...' 
          onChange={(e) => setDescription(e.target.value)}
          value={description}
          />
          <select onChange={(e) => setCategory(e.target.value)} value={category}>
              <option value=''>Categoria</option>
              <option value='Profissional'>Profissional</option>
              <option value='Acadêmica'>Acadêmica</option>
              <option value='Pessoal'>Pessoal</option>
              <option value='Espiritual'>Espiritual</option>
          </select>
          <Button style={{backgroundColor: 'rgba(78, 149, 255, 0.68)', width:80, height:30}} value='Criar' type='submit'/>
      </form>
    </>
    
  )
}

export default TaskForm