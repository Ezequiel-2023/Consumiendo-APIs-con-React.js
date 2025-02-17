import React from 'react';
import Navbars from '../common/Navbars.tsx';
import Footer from '../common/Footer.tsx';
import Cards from './Cards.tsx';
import '../../sass/header.scss';

function Home() {
  return (
    <div>
      <Navbars></Navbars>
      <header className='header'>
        <h1>Consumiendo API</h1>
        <h3>Elije una API y realiza tu consulta</h3>
        <Cards></Cards>
      </header>
      <Footer></Footer>
    </div>
  )
}

export default Home;