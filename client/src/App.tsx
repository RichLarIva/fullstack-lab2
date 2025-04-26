import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmployeePage from './components/EmployeeForm';
import './App.css';
import MainPage from './pages/MainPage';
import AssignmentForm from './components/AssignmentForm';

const App = () => {
  return (
    <Router>
      <div>
        <p>Welcome</p>
        <Routes>
          <Route path="/" element={<MainPage />} />
          {/* <Route path="/assign" element={<AssignmentForm />} /> */}
          <Route path="/employee" element={<EmployeePage />} />
          {/* <Route path="/projects" element={<ProjectPage />} /> */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
