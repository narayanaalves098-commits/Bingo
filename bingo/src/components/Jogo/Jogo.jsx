import React, { useState, useEffect } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { Bola } from "../Bola/Bola";
import "./Jogo.css";
import Historico from "../Historico/Historico";

function Jogo({ nomeBingo, quantidadeBolas, voltarAoInicio }) {
  const [disponiveis, setDisponiveis] = useState([]);
  const [sorteados, setSorteados] = useState([]);
  const [bolaAtual, setBolaAtual] = useState(null);
  const [girando, setGirando] = useState(false);
  const [mostrarHistorico, setMostrarHistorico] = useState(false);

  useEffect(() => {
    iniciarNovoJogo();
  }, [quantidadeBolas]);

  const notificar = (msg) => toast.error(msg)

  const iniciarNovoJogo = () => {
    const numeros = Array.from({ length: quantidadeBolas }, (_, i) => i + 1);
    setDisponiveis(numeros);
    setSorteados([]);
    setBolaAtual(null);
    setGirando(false);
  };

  const sortearNumero = () => {
    if (disponiveis.length === 0) {
      notificar("Todos os números já foram sorteados!");
      return;
    }

    setGirando(true);

    setTimeout(() => {
      const indiceAleatorio = Math.floor(Math.random() * disponiveis.length);
      const numeroSorteado = disponiveis[indiceAleatorio];

      const novosDisponiveis = disponiveis.filter((n) => n !== numeroSorteado);

      setDisponiveis(novosDisponiveis);
      setSorteados([...sorteados, numeroSorteado]);
      setBolaAtual(numeroSorteado);
      setGirando(false);
    }, 2000);
  };

  return (
    <div className="jogo-tela-cheia">
      <div className="jogo-container">
      <header className="jogo-cabecalho">
        <button onClick={voltarAoInicio} className="btn-voltar">
          ← Inicio 
        </button>
        <h1>{nomeBingo}</h1>
      </header>

      <main className="jogo-centro">
        <div className="area-bola">
          <Bola numero={bolaAtual} girando={girando} />
        </div>

        <div className="jogo-botoes">
          <button
            onClick={sortearNumero}
            disabled={girando || disponiveis.length === 0}
            className="btn-principal"
          >
            Sortear Número
          </button>

          <button onClick={() => setMostrarHistorico(!mostrarHistorico)}
            className="btn-secundario"
          >
            {mostrarHistorico ? "Ocultar Histórico" : "Mostrar Histórico"}
          </button>

          <button onClick={iniciarNovoJogo} disabled={girando}
            className="btn-perigo"
          >
            Resetar Jogo
          </button>
        </div>
        {mostrarHistorico && (
          <div className="area-historico"> 
            <Historico sorteados={sorteados} />
          </div>
        )}
      </main>
      </div>
    </div>
  );
}

export default Jogo;