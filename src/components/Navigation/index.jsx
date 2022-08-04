import { NavLink } from 'react-router-dom';
import s from './index.module.css';

function Navigation() {
  return (
    <div>
      <nav>
        <NavLink
          to={'/'}
          className={({ isActive }) =>
            isActive ? `${s.active}` : `${s.inactive}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to={'/movies'}
          className={({ isActive }) =>
            isActive ? `${s.active}` : `${s.inactive}`
          }
        >
          Movies
        </NavLink>
      </nav>
    </div>
  );
}

export default Navigation;
