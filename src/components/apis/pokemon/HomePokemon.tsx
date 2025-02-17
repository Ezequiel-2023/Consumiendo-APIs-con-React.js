import React from 'react'
import PokemonSearch from './PokemonSearch.tsx';
import Navbars from '../../common/Navbars.tsx';
import Footer from '../../common/Footer.tsx';


function HomePokemon() {
  return (
    <div>
      <Navbars></Navbars>
      <header className='header'>
        <h1>Consumiendo API Pokemon</h1>
        <h3>¡Elige un Pokemon!</h3>
        <PokemonSearch></PokemonSearch>
      </header>
      <Footer></Footer>
    </div>
  )
}

export default HomePokemon