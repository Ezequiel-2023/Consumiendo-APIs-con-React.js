import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home.tsx";
import HomePokemon from "./components/apis/pokemon/HomePokemon.tsx";
import HomeClima from "./components/apis/clima/HomeClima.tsx";
import HomeMarvel from "./components/apis/marvel/HomeMarvel.tsx";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/pokemon" element={<HomePokemon></HomePokemon>} />
        <Route path="/clima" element={<HomeClima></HomeClima>} />
        <Route path="/marvel" element={<HomeMarvel></HomeMarvel>} />
      </Routes>
    </Router>
  );
}

export default App;

