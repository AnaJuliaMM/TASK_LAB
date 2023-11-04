import React, {useState, useEffect} from 'react'
import Task from './components/task/Task'
import TaskForm from './components/taskForm/TaskForm'
import Header from './components/header/Header'
import Category from './components/categories/Category'
import './App.css'
import Button from './components/button/Button'



export default function App(){
  // Utilizar useState para re-renderizar a variável de uma tarefa quando ela for alterada
  // O valor inicial da variável é uma lista(array) de objetos que representam tarefas
  const [tasks, setTasks] = useState([])
  // Variável de opção de procura
  const [search, setSearch] = useState('') 
  // Variável de opção de  filtro
  const [filter, setFilter] = useState('All')
  // Variável de opção de  ordenação
  const [sort, setSort] = useState('A-Z')
  // Variável que armazena o id das tarefas
  const [id, setId] = useState(0);

  
  // useEffect para atualizar a lista de tarefa com o conteúdo do localStorage toda vez que a página for recarregada
  useEffect(() => {
    // Recupera os dados armazenados
    const storagedTasks = localStorage.getItem('history') 
    // Verifica se a conteúdo no localStorage
    if(storagedTasks){
      // Atualiza a lista de tarefas
      setTasks(JSON.parse(storagedTasks))  
    } 
  }, [])


  // Função que adiciona uma nova tarefa à lista
  const addTask = (description, category)=>{
    // Array que recebe todos as tarefas que já estão na lista e uma nova tarefa
    const newTasks = [...tasks, {
      id: id,
      description: description,
      category: category,
      isDone: false
    }]

    // Incrementar a lista de id 
    setId(id + 1)
    console.log(id);
    //Atualiza a lista oficial com a nova tarefa
    setTasks(newTasks)
    //Atualiza o localStorage
    saveLocalStorage(newTasks)
  }

  // Função de remoção de tarefas
  const removeTask = (id) => {
    // Array que recebe todos as tarefas que já estão na lista 
    const newTasks = [...tasks]
    // Retira o array que possui o id passado na função
    const filteredTasks = newTasks.filter(task => task.id !== id ? task : null)
    //Atualiza a lista oficial
    setTasks(filteredTasks)
    //Atualiza o localStorage
    saveLocalStorage(filteredTasks)
  }

  //Função que deleta todas as tarefas de uma única vez
  const removeAllTasks = () =>{
    // Requisitar confirmação do usuário
    const isConfirm = window.confirm("Você tem certeza que deseja deletar sua lista de tarefas?")
    if(isConfirm){
      // Esvazia a lista de tarefas
      setTasks([])
      // Esvazia os dados armazenados
      saveLocalStorage(tasks)
    }

  }

  // Função para marcar tarefa como concluída
  const completeTask = (id) => {
    // Array que recebe todos as tarefas que já estão na lista 
    const newTasks = [...tasks]
    // Muda o status da tarefa para true (true=done)
    const filteredTasks = newTasks.map(task => task.id === id ? task.isDone= !task.isDone : task)
    //Atualiza a lista oficial
    setTasks(newTasks)
    //Atualiza o localStorage
    saveLocalStorage(newTasks)
  }

  // Função para armazenamento no Local Storage
  const saveLocalStorage = (content)=>{
    localStorage.setItem('history', JSON.stringify(content))
  } 

  return (
    <div className='app'>
      <aside className='aside'></aside>
      <div className='wrapper'>
        <Header filter={filter} setFilter={setFilter} sort={sort} setSort={setSort} search={search} setSearch={setSearch}/>
        <main>
          <section className='create-task-form'>
              <TaskForm addTask={addTask}/>
              <Button onClick={removeAllTasks} style={{backgroundColor: '#FF3434', height: 40, width: 90}} value='Delete all tasks' type='button'/>
          </section>
          <section className='tasks-categories'>
            <aside className='categories'>
              <h3>Categorias</h3>
              <Category color={{backgroundColor: '#F978FB'}} category='Pessoal'/>
              <Category color={{backgroundColor: '#4E95FF'}} category='Profissional'/>
              <Category color={{backgroundColor: '#94F98B'}} category='Acadêmico'/>
              <Category color={{backgroundColor: '#e0f219'}} category='Espiritual'/>
            </aside>
            <section className='task-list'>
              {tasks
              .filter(task => task.description.toLowerCase().includes(search.toLowerCase()) )
              .filter(task => filter ==='All'? true : filter ==='Done'? task.isDone : !task.isDone)
              .sort((task, nextTask) => sort==='A-Z' ? task.description.localeCompare(nextTask.description) : nextTask.description.localeCompare(task.description))
              .map(task=> 
              <Task key={task.id} task={task} completeTask={completeTask} removeTask={removeTask}/>)}
            </section>
          </section>
        </main>
      </div>
    </div>);
}