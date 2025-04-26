import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import EmployeePage from './components/EmployeeForm'
import './App.css'
import MainPage from './pages/MainPage'

const App = () => 
{

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        {/* Add more routes as needed */}
        {/* <Route path="/projects" element={<ProjectPage />} /> */}
      </Routes>
    </Router>
  )
}

export default App
