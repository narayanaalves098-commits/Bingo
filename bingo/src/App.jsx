import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import Configuracao from "./components/Configuracao/Configuracao";
import Jogo from "./components/Jogo/Jogo";

function App() {
  const [nomeBingo, setNomeBingo] = useState("");
  const [quantidadeBolas, setQuantidadeBolas] = useState(75);
  const [jogoIniciado, setJogoIniciado] = useState(false)

  const notificar = (msg) => toast.error(msg)

  const iniciarBingo = () => {
    if (nomeBingo.trim() == "") {
      notificar("Por favor, insira o nome do Bingo para iniciar.")
      return
    }
    setJogoIniciado(true)
  }

  return (
    <>
      {jogoIniciado ? (
        <Jogo
          nomeBingo={nomeBingo}
          quantidadeBolas={quantidadeBolas}
        />
      ) : (
        <Configuracao
          nomeBingo={nomeBingo}
          setNomeBingo={setNomeBingo}
          quantidadeBolas={quantidadeBolas}
          setQuantidadeBolas={setQuantidadeBolas}
          aoCLicar={iniciarBingo}
        />
      )}
      <Toaster
        position="bottom-right"
        reverseOrder={true}
        gutter={3}
        toastOptions={{
          className: '',
          duration: 1000,
          removeDelay: 1000,
          style: {
            background: '#363636',
            color: '#fff',
          }
        }}
      />
    </>
  );
}

export default App;