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
          </div>
        </nav>
      </header>
    </div>
  );
}