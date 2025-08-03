import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './App.css'; // já que você usa App.css globalmente

const Menu = () => {
  const location = useLocation();

  return (
    <div className="menu">
      <Link className={`link ${location.pathname === '/' ? 'active' : ''}`} to="/">Home</Link>
      <Link className={`link ${location.pathname === '/contatos' ? 'active' : ''}`} to="/contatos">Contatos</Link>
      <Link className={`link ${location.pathname === '/sobre' ? 'active' : ''}`} to="/sobre">Sobre</Link>
      <Link className={`link ${location.pathname === '/produtos' ? 'active' : ''}`} to="/produtos">Produtos</Link>
    </div>
  );
};

export default Menu;
