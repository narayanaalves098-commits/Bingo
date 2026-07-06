import React from 'react';
import './Modal.css';

function Modal({ aberto, setResposta, fecharModal }) {
  if (!aberto) return null;

  const opcaoEscolhida = (valor) => {
    setResposta(valor);
    fecharModal();
  };

  return (
    <div className="modal-overlay">
      <div className="modal-conteudo">
        <h2>Confirmação</h2>
        <p>Você realmente deseja sair? Essa opção encerrará o jogo atual.</p>
        
        <div className="modal-botoes">
          <button 
            className="btn-sim" 
            onClick={() => opcaoEscolhida(true)}
          >
            Sim
          </button>
          
          <button 
            className="btn-nao" 
            onClick={() => opcaoEscolhida(false)}
          >
            Não
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;