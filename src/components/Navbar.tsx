import React from "react";

export const Navbar: React.FC = () => (
  <nav>
    <div className="nav-wrapper purple darken-2">
      <a href="/" className="brand-logo">
        React + TypeScript
      </a>
      <ul id="nav-mobile" className="right">
        <li>
          <a href="/">Список дел</a>
        </li> 
        <li>
          <a href="/">Информация</a>
        </li>
      </ul>
    </div>
  </nav>
);
