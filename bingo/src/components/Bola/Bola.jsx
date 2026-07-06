import React from 'react';
import './Bola.css';

export function Bola({ numero, girando }) {
  return (
    <div className="bola-wrapper">
      <h3 className="bola-titulo">ÚLTIMO SORTEADO</h3>
    <div className={`bola-bingo ${girando ? 'girando' : ''}`}>
      <div className="bola-conteudo">
        {girando && <span className="efeito-giro">...</span>}
        {!girando && numero !== null && (
          <span className="numero-grande">{numero}</span>
        )}
        {!girando && numero === null && (
          <span className="bola-vazia">?</span>
        )}
      </div>
    </div>
    </div>
  ); 
}