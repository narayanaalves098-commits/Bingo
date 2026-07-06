import { useEffect, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';
import Configuracao from "./components/Configuracao/Configuracao";
import Jogo from "./components/Jogo/Jogo";
import Modal from "./components/Modal/Modal";

function App() {
  const [nomeBingo, setNomeBingo] = useState("")
  const [quantidadeBolas, setQuantidadeBolas] = useState(75)
  const [jogoConfigurado, setJogoConfigurado] = useState(false)
  const [modalAberto, setModalAberto] = useState(false)
  const [respostaModal, setRespostaModal] = useState(null)

  const notificar = (msg) => toast.error(msg)

  const iniciarBingo = () => {
    if (nomeBingo.trim() == "") {
      notificar("Por favor, insira o nome do Bingo para iniciar.");
      return;
    }
    setJogoConfigurado(true)
  }

  const abrirModalEncerramento = () => {
    setModalAberto(true)
  }

  useEffect(() => {
    if (respostaModal === true) {
      setJogoConfigurado(false);
      setNomeBingo("");
      setQuantidadeBolas(75);
      setRespostaModal(null);
    } else if (respostaModal === false) {

      setRespostaModal(null);
    }
  }, [respostaModal])

  return (
    <>
      {jogoConfigurado ? (
        <Jogo
          nomeBingo={nomeBingo}
          quantidadeBolas={quantidadeBolas}
          voltarAoInicio={abrirModalEncerramento}
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
      <Modal
        aberto={modalAberto}
        fecharModal={() => setModalAberto(false)}
        setResposta={setRespostaModal}
      />
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
  )
}

export default App;