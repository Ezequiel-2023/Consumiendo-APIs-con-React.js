import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { Card, Button, Form } from 'react-bootstrap';
import '../../../sass/pokemonSearch.scss'

function PokemonSearch() {

    const[pokemonName, setPokemonName] = useState<string>();
    const [pokemonData, setPokemonData] = useState<any>(null);
    const[error, setError] = useState("");
    const urlBase = "https://pokeapi.co/api/v2/pokemon/"

     // Función para obtener los datos del Pokémon
  const fetchPokemon = async () => {
    if (!pokemonName) {
      setError('Por favor ingresa un nombre de Pokémon.');
      return;
    }

    try {
      setError('');
      setPokemonData(null);

      // Hacemos la solicitud a la API
      const response = await axios.get(`${urlBase}${pokemonName.toLowerCase()}`);

      // Extraemos los datos que necesitamos
      const pokemon = {
        name: response.data.name,
        sprite: response.data.sprites.other["official-artwork"].front_default, // Imagen de alta calidad
        abilities: response.data.abilities.map((a: any) => a.ability.name), // Lista de habilidades
      };
      

      setPokemonData(pokemon);
    } catch (err) {
      setError('Pokémon no encontrado. Intenta con otro nombre.');
    }
  };

  return (
    <div className="pokemon-search">
      <Form.Group className="mb-3">
        <h2>Ingresa el nombre de un Pokémon</h2>
        <Form.Control
          className='input'
          type="text"
          placeholder="Ingresa el nombre de un Pokémon"
          value={pokemonName}
          onChange={(e) => setPokemonName(e.target.value)}
        />
      </Form.Group>
      <Button onClick={fetchPokemon} variant="primary">Buscar</Button>

      {error && <p className="error">{error}</p>}

      {pokemonData && (
        <Card className="pokemon-card mt-3">
          <Card.Img className='img' variant="top" src={pokemonData.sprite} />
          <Card.Body>
            <Card.Title>{pokemonData.name.toUpperCase()}</Card.Title>
            <Card.Text className='abilities'>
              <strong>Habilidades:</strong> {pokemonData.abilities.join(', ')}
            </Card.Text>
          </Card.Body>
        </Card>
      )}
    </div>
  );
};

export default PokemonSearch;
