// import React
import React from 'react';

// import Link Routes
import { Link, Routes, Route } from 'react-router-dom';

// Import du logo Pokémon
import logo from '../assets/images/pokemon.png';

// import assets
import '../assets/styles/banniere.css';

export default function Banniere() {
  return (
    <div className="banniere">
      <header>
        <nav>
          <div className="logo-menu-container">
            <Link to="/">
              <img src={logo} className="logo" alt="Logo" />
            </Link>
            <div className="menu">
              <ul>
                <li>
                  <Link to="/">Liste Pokémons</Link>
                </li>
                <li>
                  <Link to="/pokedex">Mon Pokédex</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}