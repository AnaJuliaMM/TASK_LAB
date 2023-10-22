import React, {useState} from 'react'
import './App.css'
import Task from './components/task/Task';
import TaskForm from './components/taskForm/TaskForm';

export default function App(){
  // Utilizar useState para re-renderizar a variável de uma tarefa quando ela for alterada
  // O valor inicial da variável é uma lista(array) de objetos que representam tarefas
  const [tasks, setTasks] = useState([
    {
      id: 1,
      description: 'Comprar capinha do tablet ',
      category: 'Pessoal',
      isDone: false
    }, 
    {
      id: 2,
      description: 'Desenvolver aplicação to-do e submeter no 27box',
      category: 'Acadêmico',
      isDone: false
    },
    {
      id: 3,
      description: 'Revisar o artigo de IA',
      category: 'Acadêmico',
      isDone: false
    }
  ])

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
  }

  // Função de remoção de tarefas
  const removeTask = (id) => {
     // Array que recebe todos as tarefas que já estão na lista 
     const newTasks = [...tasks]
     // Retira o array que possui o id passado na função
     const filteredTasks = newTasks.filter(task => task.id !== id ? task : null)
     //Atualiza a lista oficial
     setTasks(filteredTasks)
  }


  // Função para marcar tarefa como concluída
  const completeTask = (id) => {
    // Array que recebe todos as tarefas que já estão na lista 
    const newTasks = [...tasks]
    // Retira o array que possui o id passado na função
    const filteredTasks = newTasks.map(task => task.id === id ? task.isDone= !task.isDone : task)
    //Atualiza a lista oficial
    setTasks(newTasks)
 }

  return (
    <div className='app'>
      <h1>Lista de Tarefas</h1>
      <div className='task-list'>
        {/*Percorre cada tarefa da lista (tasks) e retorna um componente com as informações dela */}
        {tasks.map((task) => <Task key={task.id} task={task} removeTask={removeTask} completeTask={completeTask}/>)}
      </div>
      <TaskForm addTask={addTask}/>
    </div>);
}