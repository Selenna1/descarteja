import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/pontos.css"
import Mapa from "../components/Mapa"

function Pontos() {
  const [pontos, setPontos] = useState([])
  const [busca, setBusca] = useState("")

  async function editarPonto(ponto) {
  if (!ponto || !ponto._id) {
    return
  }
  const novoNome = prompt(
    "Novo nome:",
    ponto.nome
  )
  const novoEndereco = prompt(
    "Novo endereço:",
    ponto.endereco
  )
  const novosResiduos = prompt(
    "Novos resíduos:",
    ponto.residuos
  )
  const novaLatitude = prompt(
  "Nova latitude:",
  ponto.latitude || ""
  )
  const novaLongitude = prompt(
    "Nova longitude:",
    ponto.longitude || ""
  )
  if (
    novoNome === null ||
    novoEndereco === null ||
    novosResiduos === null ||
    novaLatitude === null ||
    novaLongitude === null
  ) {
    return
  }
  const resposta = await fetch(
    `http://localhost:3000/pontos/${ponto._id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        nome: novoNome,
        endereco: novoEndereco,
        residuos: novosResiduos,
        latitude: Number(novaLatitude),
        longitude: Number(novaLongitude)
      })
    }
  )
  const pontoAtualizado = await resposta.json()
  setPontos(
    pontos.map((p) =>
      p._id === ponto._id
        ? pontoAtualizado
        : p
    )
  )
}

  async function excluirPonto(id) {
  await fetch(`http://localhost:3000/pontos/${id}`, {
    method: "DELETE"
  })
  setPontos(pontos.filter((ponto) => ponto._id !== id))
  }

  useEffect(() => {
    fetch("http://localhost:3000/pontos")
      .then((res) => res.json())
      .then((data) => setPontos(data))
  }, [])

  const pontosFiltrados = pontos.filter((ponto) =>
    ponto.nome.toLowerCase().includes(busca.toLowerCase())
  )
  return (
    <div>
      <Navbar />
      <main className="container">
        <h1 className="pontos-title">📍 Pontos de Coleta</h1>
        <input
          type="text"
          placeholder="Buscar ponto de coleta..."
          className="input"
          value={busca}
          onChange={(e) => setBusca(e.target.value)}
        />
        <Mapa pontos={pontosFiltrados} />
        <div className="pontos-grid">
          {pontosFiltrados.map((ponto) => (
            <div key={ponto._id} className="ponto-card">
              <h2 className="ponto-nome">{ponto.nome}</h2>
              <p><strong>Endereço:</strong>{" "}{ponto.endereco}</p>
              <p><strong>Resíduos:</strong>{" "}{ponto.residuos}</p>
              <button className="editar-button" onClick={() => editarPonto(ponto)}>Editar</button>
              <button className="excluir-button" onClick={() => excluirPonto(ponto._id)}>Excluir</button>
        </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Pontos