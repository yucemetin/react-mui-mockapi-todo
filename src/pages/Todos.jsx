import React, { useState } from 'react'
import UserNavbar from '../components/UserNavbar'
import TodoForm from "../components/TodoForm"

export default function Todos() {

  const [darkMode, setDarkMode] = useState(false)

  return (
    <div style={{ background: darkMode ? "black" : "white" }} >
      <UserNavbar setDarkMode={setDarkMode} darkMode={darkMode} />
      <h1>todos</h1>
      <TodoForm />
    </ div >
  )
}
