import { Routes, Route } from 'react-router-dom';
import EmployeePage from './pages/EmployeePage';
import './App.css';
import MainPage from './pages/MainPage';
import AssignmentsPage from './pages/AssignPage';
import Header from './components/Header';
import ProjectPage from './pages/ProjectPage';

const App = () => {
  return (
    <>
    
    <Header />
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/employee" element={<EmployeePage />} />
      <Route path="/assign" element={<AssignmentsPage />} />
      <Route path="*" element={<h1>404 Not Found</h1>} />
      <Route path="/projects" element={<ProjectPage/>} />
    </Routes>
    </>
  );
};

export default App;
