import React from 'react'
import PokemonSearch from './ClimaSearch.tsx';
import Navbars from '../../common/Navbars.tsx';
import Footer from '../../common/Footer.tsx';
import '../../../sass/header.scss';

function HomeClima() {
  return (
    <div>
      <Navbars></Navbars>
      <header className='header'>
        <h1 >Consumiendo API Clima</h1>
        <h3 >¡Elige un Pais para ver el clima actual!</h3>
        <PokemonSearch></PokemonSearch>
      </header>
      <Footer></Footer>
    </div>
  )
}

export default HomeClima