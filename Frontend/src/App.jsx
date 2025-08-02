import { useState } from 'react'
import './App.css';
import Login from '../Components/Login';
import Signup from '../Components/Signup';
import { BrowserRouter , Routes , Route, Navigate } from 'react-router-dom';
import Dashboard from '../Components/Dashboard';
import Leaderboard from '../Components/Leaderboard';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/dashboard" />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path='/dashboard' element={<Dashboard />}></Route>
          <Route path='/leaderboard' element={<Leaderboard />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
