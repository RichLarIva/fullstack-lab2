import { NavLink } from 'react-router-dom';
import '../index.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'active-link' : undefined)}
          >
            🏠 Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/employee"
            className={({ isActive }) => (isActive ? 'active-link' : undefined)}
          >
            👤 Add Employee
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/assign"
            className={({ isActive }) => (isActive ? 'active-link' : undefined)}
          >
            📝 Assign Project
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? 'active-link' : undefined)}
          >
            📝 Projects
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
