import React from 'react';
import './Botao.css';

export function Botao({ texto, onClick, disabled, classe }) {
  return (
    <button 
      onClick={onClick} 
      disabled={disabled} 
      className={`btn-custom ${classe}`}
    >
      {texto}
    </button>
  );
}