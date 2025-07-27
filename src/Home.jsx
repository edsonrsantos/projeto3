import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import Texto from './Texto';
import './App.css';

const Home = () => {
  const location = useLocation();
  const estaNaRaiz = location.pathname === '/';

  return (
    <div className="home">
      <nav>
        <Link to="/">Texto</Link> |{' '}
        <Link to="/detalhes">Detalhes</Link>
      </nav>

      <hr />

      {/* Exibe o componente Texto apenas quando estiver na rota / */}
      {estaNaRaiz && <Texto />}

      {/* Exibe o conteúdo da rota filha, como Detalhes */}
      <Outlet />
    </div>
  );
};

export default Home;