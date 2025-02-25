import React, { useState } from 'react';
import axios from 'axios';
import { Card, Button, Form } from 'react-bootstrap';
import '../../../sass/Search.scss';

function ClimaSearch() {
    const ApiKey = process.env.REACT_APP_WEATHER_API_KEY;
    const urlBase = "https://api.openweathermap.org/data/2.5/weather";

    const [ciudad, setCiudad] = useState<string>("");
    const [data, setData] = useState<any>(null);
    const [error, setError] = useState<string>("");

    const cambioClima = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCiudad(e.target.value);
    };

    const cambioCiudad = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (ciudad.trim() !== "") {
            fetchClima();
        } else {
            setError("Por favor ingrese una ciudad.");
        }
    };

    const fetchClima = async () => {
        try {
            setError("");
            const response = await axios.get(`${urlBase}?q=${ciudad}&appid=${ApiKey}&units=metric&lang=es`);
            setData(response.data);
        } catch (error) {
            setError("No se pudo obtener el clima. Verifica el nombre de la ciudad.");
        }
    };

    return (
        <div className="Clima-search">
            <Form onSubmit={cambioCiudad} className="mb-3">
                <h2 className='h2'>Ingresa el nombre de una ciudad</h2>
                <Form.Control
                    className='input h2'
                    type="text"
                    placeholder="Ejemplo: Madrid, Tokyo, New York"  
                    value={ciudad}
                    onChange={cambioClima}  
                />
                <Button type="submit" variant="primary">Buscar</Button>
            </Form>

            {error && <p className="error">{error}</p>}

            {data && (
                <Card className="Clima-card mt-3 cardClima">
                    <Card.Body>
                        <Card.Title className='h2'>{data.name}, {data.sys.country}</Card.Title>
                        <Card.Img className='img' variant="top" src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} />
                        <Card.Text className='abilities'>
                            <strong>Clima:</strong> {data.weather[0].description} <br />
                            <strong>Temperatura:</strong> {data.main.temp}°C <br />
                            <strong>Humedad:</strong> {data.main.humidity}% <br />
                            <strong>Viento:</strong> {data.wind.speed} m/s
                        </Card.Text>
                    </Card.Body>
                </Card>     
            )}
        </div>
    );
}

export default ClimaSearch;
