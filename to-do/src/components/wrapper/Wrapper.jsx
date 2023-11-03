import React, {useState, useEffect} from 'react'
import Task from '../task/Task'
import TaskForm from '../taskForm/TaskForm'
import Search from '../search/Search'
import Filter from '../filter/Filter'
import Header from '../header/Header'
import './Wrapper.css'

//TO DO: Passar as funções como propriedade para o componente

export default function Wrapper() {
    // Utilizar useState para re-renderizar a variável de uma tarefa quando ela for alterada
  // O valor inicial da variável é uma lista(array) de objetos que representam tarefas
  const [tasks, setTasks] = useState([])
  // Variável de opção de procura
  const [search, setSearch] = useState('') 
  // Variável de opção de  filtro
  const [filter, setFilter] = useState('All')
  // Variável de opção de  ordenação
  const [sort, setSort] = useState('A-Z')

  
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
      id: Math.floor(Math.random() * 10000),
      description: description,
      category: category,
      idDone: false
    }]

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


  // Função para marcar tarefa como concluída
  const completeTask = (id) => {
    // Array que recebe todos as tarefas que já estão na lista 
    const newTasks = [...tasks]
    // Transforma o array que possui o id passado na função
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
    <div className='wrapper-content'>
        <Header/>
        <main>
        <section className='create-task-form'>
            <TaskForm/>
        </section>
        <section className='task-list'>
          <Task task={{description:'a', category: "a"}}/>
        </section>
          
        </main>
       
    </div>
    
  )
}



// {/* <Search search={search} setSearch={setSearch}/>
// <Filter filter={filter} setFilter={setFilter} sort={sort} setSort={setSort}/>

// <div className='task-list'>
//     {/*Filtra as tarefas e exibe as correspondentes */}

//     {tasks.filter( (task) => 
//     filter === 'All' ? true : filter === 'Done' ? task.isDone : !task.isDone )
//     .filter((task => task.description.toLowerCase().includes(search.toLowerCase())))
//     .sort( (task, nextTask) => 
//     sort === "A-Z" ? task.description.localeCompare(nextTask.description) :  nextTask.description.localeCompare(task.description)

//     )
//     .map((task) => 
//     <Task key={task.id} 
//     task={task} 
//     removeTask={removeTask} 
//     completeTask={completeTask}/>
//     )}
// </div>
// <TaskForm addTask={addTask}/> */}