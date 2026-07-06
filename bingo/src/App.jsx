import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import Configuracao from "./components/Configuracao/Configuracao";
import Jogo from "./components/Jogo/Jogo";

function App() {
  const [nomeBingo, setNomeBingo] = useState("");
  const [quantidadeBolas, setQuantidadeBolas] = useState(75);
  const [jogoConfigurado, setJogoConfigurado] = useState(false)

  const notificar = (msg) => toast.error(msg)

  const iniciarBingo = () => {
    if (nomeBingo.trim() == "") {
      notificar("Por favor, insira o nome do Bingo para iniciar.")
      return
    }
    setJogoConfigurado(true)
  }

  const limparFormulario = async () =>{
    setNomeBingo("")
    setQuantidadeBolas(75)
  }

  const encerrarBingo = async () => {
    await setJogoConfigurado(false)
    limparFormulario()
  }

  return (
    <>
      {jogoConfigurado ? (
        <Jogo
          nomeBingo={nomeBingo}
          quantidadeBolas={quantidadeBolas}
          voltarAoInicio={encerrarBingo}
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