import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Row, Col, Form, Button } from 'react-bootstrap';
import md5 from 'crypto-js/md5';

const publicKey = process.env.REACT_APP_MARVEL_PUBLICA_KEY;
const privateKey = process.env.REACT_APP_MARVEL_PRIVADA_KEY;

const generateHash = (ts: string) => {
    return md5(ts + privateKey + publicKey).toString();
};

function MarvelSearch() {
    const [personajes, setPersonajes] = useState<any[]>([]);
    const [error, setError] = useState<string>('');
    const [search, setSearch] = useState<string>('');
    const [searchResults, setSearchResults] = useState<any[]>([]);

    useEffect(() => {
        const fetchPersonajes = async () => {
            try {
                const ts = Date.now().toString();
                const hash = generateHash(ts);
                const url = `https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
                const response = await axios.get(url);
                setPersonajes(response.data.data.results);
            } catch (e) {
                setError('No se pudo obtener los personajes de Marvel.');
            }
        };
        fetchPersonajes();
    }, []);

    const handleSearch = async () => {
        if (search.trim() === '') {
            setSearchResults([]); // Limpiar resultados si el input está vacío
            return;
        }
        try {
            const ts = Date.now().toString();
            const hash = generateHash(ts);
            const url = `https://gateway.marvel.com/v1/public/characters?nameStartsWith=${search}&ts=${ts}&apikey=${publicKey}&hash=${hash}`;
            const response = await axios.get(url);
            setSearchResults(response.data.data.results.slice(0, 5)); // Limitar a 5 resultados
        } catch (e) {
            setError('No se encontraron personajes.');
            setSearchResults([]);
        }
    };

    return (
        <div>
            <h2>Personajes de Marvel</h2>
            <Form.Group className="mb-3" controlId="search">
                <Form.Control
                    type="text"
                    placeholder="Ingrese el nombre del personaje..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
                <Button variant="primary" className="mt-2" onClick={handleSearch}>
                    Buscar
                </Button>
            </Form.Group>
            {error && <p>{error}</p>}
            <Row>
                {(searchResults.length > 0 ? searchResults : personajes.slice(0, 5)).map((p) => (
                    <Col key={p.id} md={4}>
                        <Card className="custom-card">
                            <Card.Img
                                variant="top"
                                src={`${p.thumbnail.path}.${p.thumbnail.extension}`}
                                alt={p.name}
                                width="150"
                            />
                            <Card.Body>
                                <Card.Title>{p.name}</Card.Title>
                                <Card.Text>{p.description || 'Sin descripción'}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default MarvelSearch;
