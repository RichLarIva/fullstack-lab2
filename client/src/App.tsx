import { Routes, Route } from 'react-router-dom';
import EmployeePage from './pages/EmployeePage';
import './App.css';
import MainPage from './pages/MainPage';
import AssignmentForm from './components/AssignmentForm';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <>
    
    <Navbar />
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/employee" element={<EmployeePage />} />
      <Route path="/assign" element={<AssignmentForm />} />

    </Routes>
    </>
  );
};

export default App;
