import { useState } from "react";
import Configuracao from "./components/Configuracao/Configuracao";
import Jogo from "./components/Jogo/Jogo";

function App() {
  const [nomeBingo, setNomeBingo] = useState("");
  const [quantidadeBolas, setQuantidadeBolas] = useState(75);
  const [jogoIniciado, setJogoIniciado] = useState(false)

  const iniciarBingo = () => {
    if(nomeBingo.trim()==""){
      alert("Por favor, insira o nome do Jogo Para iniciar.")
      return
    }
    setJogoIniciado(true)
  }

  return (
    jogoIniciado?(
      <Jogo
      nomeBingo={nomeBingo}
      quantidadeBolas={quantidadeBolas}
      />
    ):(
      <Configuracao
      nomeBingo={nomeBingo}
      setNomeBingo={setNomeBingo}
      quantidadeBolas={quantidadeBolas}
      setQuantidadeBolas={setQuantidadeBolas}
      aoCLicar={iniciarBingo}
    />
    )
  );
}

export default App;