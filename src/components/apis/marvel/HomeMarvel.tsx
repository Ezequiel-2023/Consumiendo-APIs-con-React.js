import React from 'react'
import Navbars from '../../common/Navbars.tsx';
import Footer from '../../common/Footer.tsx';
import '../../../sass/header.scss';
import MarvelSearch from './MarvelSearch.tsx'

function HomeMarvel() {
  return (
    <div>
      <Navbars></Navbars>
      <header className='header'>
        <h1>Consumiendo API Marvel</h1>
        <MarvelSearch></MarvelSearch>
      </header>
      <Footer></Footer>
    </div>
  )
}

export default HomeMarvel