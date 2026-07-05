import { useState } from "react";
import Configuracao from "./components/Configuracao/Configuracao";

function App() {
  const [nomeBingo, setNomeBingo] = useState("");
  const [quantidadeBolas, setQuantidadeBolas] = useState(75);

  return (
    <Configuracao
      nomeBingo={nomeBingo}
      setNomeBingo={setNomeBingo}
      quantidadeBolas={quantidadeBolas}
      setQuantidadeBolas={setQuantidadeBolas}
    />
  );
}

export default App;