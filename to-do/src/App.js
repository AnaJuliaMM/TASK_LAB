import React, {useState, useEffect} from 'react'
import './App.css'
import Wrapper from './components/wrapper/Wrapper';


export default function App(){
  return (
    <div className='app'>
      <aside className='aside'></aside>
      <Wrapper/>
    </div>);
}