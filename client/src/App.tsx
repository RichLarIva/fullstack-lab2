import { Routes, Route } from 'react-router-dom';
import EmployeePage from './pages/EmployeePage';
import './App.css';
import MainPage from './pages/MainPage';
import AssignmentForm from './components/AssignmentForm';
import Navbar from './components/Navbar';
import ProjectPage from './pages/ProjectPage';

const App = () => {
  return (
    <>
    
    <Navbar />
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/employee" element={<EmployeePage />} />
      <Route path="/assign" element={<AssignmentForm />} />
      <Route path="*" element={<h1>404 Not Found</h1>} />
      <Route path="/projects" element={<ProjectPage/>} />
    </Routes>
    </>
  );
};

export default App;
