import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  let headerActiveStyle = {
    textDecoration: 'underline wavy blue 5px',
  };
  return (
    <div>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'headerActiveStyle' : undefined
            }
            to='/'
          >
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'headerActiveStyle' : undefined
            }
            to='/resume'
          >
            Resume
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'headerActiveStyle' : undefined
            }
            to='/portfolio'
          >
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? 'headerActiveStyle' : undefined
            }
            to='/contact'
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
