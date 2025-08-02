import { useState } from 'react'
import './App.css';
import Login from '../Components/Login';
import Signup from '../Components/Signup';
import { BrowserRouter , Routes , Route, Navigate } from 'react-router-dom';
import Dashboard from '../Components/Dashboard';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
