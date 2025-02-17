import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/Home.tsx";
import HomePokemon from "./components/apis/pokemon/HomePokemon.tsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home></Home>} />
        <Route path="/pokemon" element={<HomePokemon></HomePokemon>} />
      </Routes>
    </Router>
  );
}

export default App;