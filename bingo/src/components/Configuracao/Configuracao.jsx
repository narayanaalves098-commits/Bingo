import "./Configuracao.css";

function Configuracao({
  nomeBingo,
  setNomeBingo,
  quantidadeBolas,
  setQuantidadeBolas,
}) {
  return (
    <div className="container">

      <h1>BINGO SENAC</h1>

      <label>Nome do Bingo</label>

      <input
        type="text"
        value={nomeBingo}
        onChange={(e) => setNomeBingo(e.target.value)}
      />

      <label>Quantidade de bolas</label>

      <select
        value={quantidadeBolas}
        onChange={(e) => setQuantidadeBolas(Number(e.target.value))}
      >
        <option value={30}>30</option>
        <option value={50}>50</option>
        <option value={75}>75</option>
        <option value={90}>90</option>
      </select>

      <button>Iniciar Bingo</button>

    </div>
  );
}

export default Configuracao;