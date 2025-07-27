import React from 'react';
import { Link } from 'react-router-dom';

export default function Texto() {
  return (
    <div>
      <h1>Texto</h1>
      <p>Este é o conteúdo do Texto.</p>
      <p>Este é o conteúdo do Texto.</p>
      <p>Este é o conteúdo do Texto.</p>
      <p>Este é o conteúdo do Texto.</p>
      <p>Este é o conteúdo do Texto.</p>
      
      <Link to="/detalhes">Ir para Detalhes</Link>
    </div>
  );
}