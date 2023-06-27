// Import React
import React, { useState, useEffect } from 'react';

// Import Pokemon
import pokemonsData from '../data/pokedex.json';

// Import assets
import '../assets/styles/pokemon.css'

export default function Pokemon({ pokemons, addPokemon, deletePokemon, updatePokemon }) {
  // Définition des couleurs pour chaque type de Pokémon
  const typeColors = {
    normal: '#A8A77A',
    fire: '#EE8130',
    water: '#6390F0',
    electric: '#F7D02C',
    grass: '#7AC74C',
    ice: '#96D9D6',
    fighting: '#C22E28',
    poison: '#A33EA1',
    ground: '#E2BF65',
    flying: '#A98FF3',
    psychic: '#F95587',
    bug: '#A6B91A',
    rock: '#B6A136',
    ghost: '#735797',
    dragon: '#6F35FC',
    dark: '#705746',
    steel: '#B7B7CE',
    fairy: '#D685AD',
  };

  // État du terme de recherche
  const [searchTerm, setSearchTerm] = useState('');
  // État des Pokémon filtrés
  const [filteredPokemons, setFilteredPokemons] = useState([]);

  // Fonction pour obtenir la couleur correspondant au type du Pokémon
  const getTypeColor = (type) => {
    const primaryType = type[0]; // Obtenir le premier type
    return typeColors[primaryType] || 'black'; // Retourne la couleur associée au type ou noir par défaut
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      // Filtrer les Pokémon en fonction du terme de recherche
      const filtered = pokemonsData.filter((pokemon) =>
        pokemon.name.french.toLowerCase().includes(searchTerm.toLowerCase())
      );
      // Mettre à jour la liste des Pokémon filtrés
      setFilteredPokemons(filtered);
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm]);

  // Gérer les modifications du terme de recherche
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      {/* Champ de recherche */}
      <input
        type="text"
        placeholder="Rechercher un Pokémon"
        value={searchTerm}
        onChange={handleSearch}
      />
      {/* Liste des Pokémon */}
      <div className="pokemon">
        {filteredPokemons.map((pokemon) => (
          <div key={pokemon.id} className={`pokemon-card ${pokemon.type[0].toLowerCase()}`}>
            <div className="pokemon-info">
              <h2 className="pokemon-name">{pokemon.name.french}</h2>
              <p className="pokemon-type" style={{ backgroundColor: getTypeColor(pokemon.type) }}>
                {pokemon.type.join(', ')}
              </p>
              <ul className="pokemon-stats">
                <li>HP: {pokemon.base.HP}</li>
                <li>Attack: {pokemon.base.Attack}</li>
                <li>Defense: {pokemon.base.Defense}</li>
                <li>Special Attack: {pokemon.base["Sp. Attack"]}</li>
                <li>Special Defense: {pokemon.base["Sp. Defense"]}</li>
                <li>Speed: {pokemon.base.Speed}</li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}