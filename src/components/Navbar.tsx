import React from "react";
import { NavLink } from "react-router-dom";
export const Navbar: React.FC = () => (
  <nav>
    <div className="nav-wrapper  purple darken-2">
      <a href="/" className="brand-logo center ">
        React + TypeScript
      </a>

      <ul id="nav-mobile" className="right hide-on-small-only">
        <li>
          <NavLink to="/">Список дел</NavLink>
        </li>
        <li>
          <NavLink to="/about">Информация</NavLink>
        </li>
      </ul>
    </div>
  </nav>
);
