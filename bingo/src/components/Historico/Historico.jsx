import React from 'react';

function Historico({ sorteados }) {
  const sorteadosOrdenados = [...sorteados].sort((a, b) => a - b);

  return (
    <div className="jogo-historico">
      <h4>NÚMEROS SORTEADOS ({sorteados.length}):</h4>
      <div className="historico-lista">
        {sorteadosOrdenados.length > 0
          ? sorteadosOrdenados.map((num, index) => (
              <span key={index} className="historico-item">{num}</span>
            ))
          : <p>Nenhum número sorteado ainda.</p>
        }
      </div>
    </div>
  );
}

export default Historico;