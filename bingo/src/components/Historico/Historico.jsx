import React from 'react';

function Historico({ sorteados }) {
  const sorteadosOrdenados = [...sorteados].sort((a, b) => a - b);

  return (
    <div className="jogo-historico">
      <h3>Números Sorteados ({sorteados.length}):</h3>
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