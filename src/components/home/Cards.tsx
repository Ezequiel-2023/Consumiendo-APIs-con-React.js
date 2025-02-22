import React from 'react';
import { NavLink } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Pokemon from "../../img/pokemon.png";
import Marvel from "../../img/marvel.png";
import Rick from "../../img/rick.png";
import Clima from '../../img/clima.png';
import Movie from "../../img/movie.png"
import Nasa from "../../img/nasa.jpg"
import "../../sass/cards.scss";

function Cards() {
  return (
    <div className="cards-container">
      <Card className="custom-card">
        <Card.Img variant="top" src={Pokemon} />
        <Card.Body>
          <Card.Title>POKEMON</Card.Title>
          <Card.Text>API Pokemon, evoluciones y datos interesantes</Card.Text>
          <NavLink to="/pokemon">
            <Button variant="primary">Explorar</Button>
          </NavLink>
        </Card.Body>
      </Card>

      <Card className="custom-card">
        <Card.Img variant="top" src={Marvel} />
        <Card.Body>
          <Card.Title>Marvel</Card.Title>
          <Card.Text>API Marvel, Datos interesantes</Card.Text>
          <NavLink to="/marvel">
            <Button variant="primary">Explorar</Button>
          </NavLink>
        </Card.Body>
      </Card>

      <Card className="custom-card">
        <Card.Img variant="top" src={Rick} />
        <Card.Body>
          <Card.Title>Rick y Morty</Card.Title>
          <Card.Text>API Rick y Morty ????</Card.Text>
          <NavLink to="/rick-morty">
            <Button variant="primary">Explorar</Button>
          </NavLink>
        </Card.Body>
      </Card>

      <Card className="custom-card">
        <Card.Img variant="top" src={Clima} />
        <Card.Body>
          <Card.Title>Clima</Card.Title>
          <Card.Text>API Clima</Card.Text>
          <NavLink to="/clima">
            <Button variant="primary">Dar un vistazo</Button>
          </NavLink>
        </Card.Body>
      </Card>

      <Card className="custom-card">
        <Card.Img variant="top" src={Movie} />
        <Card.Body>
          <Card.Title>Movie</Card.Title>
          <Card.Text>API Movie</Card.Text>
          <NavLink to="/movie">
            <Button variant="primary">Explorar</Button>
          </NavLink>
        </Card.Body>
      </Card>

      <Card className="custom-card">
        <Card.Img variant="top" src={Nasa} />
        <Card.Body>
          <Card.Title>Nasa</Card.Title>
          <Card.Text>API Nasa</Card.Text>
          <NavLink to="/movie">
            <Button variant="primary">Explorar</Button>
          </NavLink>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Cards;
