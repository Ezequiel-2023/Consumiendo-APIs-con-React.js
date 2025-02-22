import React, { useState } from 'react';
import axios from 'axios';
import { Card, Button, Form, Row, Col } from 'react-bootstrap';
import '../../../sass/Search.scss';

function PokemonSearch() {
    const [pokemonName, setPokemonName] = useState<string>("");
    const [pokemonData, setPokemonData] = useState<any>(null);
    const [error, setError] = useState("");
    const [evoluciones, setEvoluciones] = useState<{ name: string; image: string; abilities: string[] }[]>([]);
    const urlBase = "https://pokeapi.co/api/v2/pokemon/";

    // Función para obtener los datos del Pokémon
    const fetchPokemon = async () => {
        if (!pokemonName) {
            setError('Por favor ingresa un nombre de Pokémon.');
            return;
        }

        try {
            setError('');
            setPokemonData(null);
            setEvoluciones([]);

            // Hacemos la solicitud a la API
            const response = await axios.get(`${urlBase}${pokemonName.toLowerCase()}`);

            // Extraemos los datos que necesitamos
            const pokemon = {
                name: response.data.name,
                sprite: response.data.sprites.other["official-artwork"].front_default, // Imagen de alta calidad
                abilities: response.data.abilities.map((a: any) => a.ability.name), // Lista de habilidades
                speciesUrl: response.data.species.url
            };
            setPokemonData(pokemon);
            fetchevoluciones(pokemon.speciesUrl);
        } catch (err) {
            setError('Pokémon no encontrado. Intenta con otro nombre.');
        }
    };

    const fetchevoluciones = async (speciesUrl: string) => {
        try {
            const speciesResponse = await axios.get(speciesUrl);
            const evolucionesUrl = speciesResponse.data.evolution_chain.url;
            const evolutionResponse = await axios.get(evolucionesUrl);
            const chain = evolutionResponse.data.chain;
            const evolutions: { name: string; image: string; abilities: string[] }[] = [];

            let current = chain;
            while (current) {
                const name = current.species.name;
                const pokemonResponse = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
                const image = pokemonResponse.data.sprites.other["official-artwork"].front_default;
                const abilities = pokemonResponse.data.abilities.map((a: any) => a.ability.name);

                evolutions.push({ name, image, abilities });
                current = current.evolves_to[0]; // Pasar al siguiente Pokémon en la cadena
            }

            setEvoluciones(evolutions);
        } catch (err) {
            console.error("Error al obtener la evolución:", err);
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
                    <Card.Title className='h2'>{pokemonData.name.toUpperCase()}</Card.Title>
                    <Card.Img className='img' variant="top" src={pokemonData.sprite} />
                    <Card.Body>
                        <Card.Text className='abilities'>
                            <strong>Habilidades:</strong> {pokemonData.abilities.join(', ')}
                        </Card.Text>
                    </Card.Body>
                </Card>
            )}

            {evoluciones.length > 0 && (
                <div className="pokemon-card mt-3">
                    <h4 className='h2'>Evoluciones:</h4>
                    <Row>
                        {evoluciones.map((evo, index) => (
                            <Col key={index} xs={4} className="abilities">
                              <p className=' h2'>{evo.name.toUpperCase()}</p>
                                <img src={evo.image} alt={evo.name} className="img" />
                                <Card.Text className='abilities'>
                                    <strong>Habilidades:</strong> {evo.abilities.join(', ')}
                                </Card.Text>
                            </Col>
                        ))}
                    </Row>
                </div>
            )}
        </div>
    );
};

export default PokemonSearch;
