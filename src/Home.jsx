import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Texto from './Texto';
import Detalhes from './Detalhes';

export default function Home() {
  return (
    <div className="home">
      <Routes>
        <Route path="/" element={<Texto />} />
        <Route path="/detalhes" element={<Detalhes />} />
      </Routes>
    </div>
  );
}