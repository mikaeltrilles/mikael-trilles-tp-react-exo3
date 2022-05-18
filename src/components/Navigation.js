import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <li>
          <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink to="/mention" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          Mentions légales
          </NavLink>
        </li>
        <li>
          <NavLink to="/credit" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          Crédits
          </NavLink>
        </li>
        
      </ul>
    </div>
  );
};

export default Navigation;