import css from './Common.module.css';
import { NavLink } from 'react-router-dom';

export const Common = () => {
  return (
    <div>
      <header className={css.header}>
        <nav>
          <ul className={css.navLinks}>
            <li>
              <NavLink className={css.link} to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className={css.link} to="/movies">
                Movies
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};
