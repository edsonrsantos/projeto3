import React from 'react';
import { Link } from 'react-router-dom';

export default function Detalhes() {
  return (
    <div className='detalhes'>
      <h1>Detalhes</h1>
      <p>Este é o conteúdo dos Detalhes.</p>
      <p>Este é o conteúdo dos Detalhes.</p>
      <p>Este é o conteúdo dos Detalhes.</p>
      <p>Este é o conteúdo dos Detalhes.</p>
      <p>Este é o conteúdo dos Detalhes.</p>
      <Link to="/">Voltar para Texto</Link>
    </div>
  );
}