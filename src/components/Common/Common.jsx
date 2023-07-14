import React, { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './Common.module.css';

const Common = () => {
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
              <NavLink className={css.link} to="/SearchMovies">
                Movies
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Suspense>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Common;
