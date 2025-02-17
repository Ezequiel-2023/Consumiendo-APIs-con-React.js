import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import '../../sass/navbar.scss';

function Navbars() {
  
  const navegacion = useNavigate();
  const homeClick = ()=>{
    navegacion("/");
  };

  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__brand" onClick={() => homeClick()}>API</div>
        <ul className="navbar__links">
          <li>
            <NavLink to="/marvel" className="navbar__link">Marvel</NavLink>
          </li>
          <li>
            <NavLink to="/pokemon" className="navbar__link">Pokémon</NavLink>
          </li>
          <li>
            <NavLink to="/rick-morty" className="navbar__link">Rick & Morty</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbars;