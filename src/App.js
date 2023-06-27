// import React
import React from 'react';

// import Link Routes
import { Link, Routes, Route } from 'react-router-dom';

// import components
import Banniere from './components/Banniere';
import Pokemon from './components/Pokemon';

// import assets
import './App.css';

function App() {
  return (
    <div className="App">
      <Banniere />
      <Routes>
        <Route path="/" element={<Pokemon />} />
    </Routes>
    </div>
  );
}

export default App;
