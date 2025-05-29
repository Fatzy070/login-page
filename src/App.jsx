import { useState } from 'react'
import Login from './form/login'
import Dashboard from './form/dashboard';
import { Routes , Route , Navigate } from "react-router-dom";

function App() {
    const isloggedin = localStorage.getItem("isloggedin") === "true";

  return (
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/dashboard' element={ isloggedin ?  <Dashboard /> : <Navigate to='/' />} />
      </Routes>
  )
}

export default App
