import React from 'react'
import { Route, Routes } from 'react-router'
import Register from './pages/Register'
import Login from './pages/Login'
import HomePage from './pages/Homepage'

const App = () => {
  return (
    <>
     <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />

      </Routes>
    </>
  )
}

export default App