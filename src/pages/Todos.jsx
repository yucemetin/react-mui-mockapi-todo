import React, { useState } from 'react'
import UserNavbar from '../components/UserNavbar'
import TodoForm from "../components/TodoForm"
import TodoList from '../components/TodoList';

export default function Todos() {

  const [darkMode, setDarkMode] = useState(false)

  return (
    <div style={{ background: darkMode ? "black" : "white" }} >
      <UserNavbar setDarkMode={setDarkMode} darkMode={darkMode} />
      <h1>todos</h1>
      <TodoForm />
      <TodoList />
    </ div >
  )
}
