import { useState } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import "../styles/cadastrar.css"
import Mapa from "../components/Mapa"

function Cadastrar() {
  const [nome, setNome] = useState("")
  const [endereco, setEndereco] = useState("")
  const [residuos, setResiduos] = useState("")
  const [latitude, setLatitude] = useState("")
  const [longitude, setLongitude] = useState("")

  async function cadastrarPonto(e) {
    e.preventDefault()
    const novoPonto = {
      nome,
      endereco,
      residuos,
      latitude: Number(latitude),
      longitude: Number(longitude)
    }
    await fetch("http://localhost:3000/pontos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(novoPonto)
    })

    alert("Ponto cadastrado com sucesso!")
    setNome("")
    setEndereco("")
    setResiduos("")
  }

  return (
    <div>
      <Navbar />
      <main className="cadastro-container">
        <div className="cadastro-card">
          <h1 className="cadastro-title">➕ Cadastrar Ponto</h1>
          <form
            onSubmit={cadastrarPonto}
            className="cadastro-form"
          >
            <input
              type="text"
              placeholder="Nome do ponto"
              className="input"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />

            <input
              type="text"
              placeholder="Endereço"
              className="input"
              value={endereco}
              onChange={(e) => setEndereco(e.target.value)}
              required
            />
            <input
              type="text"
              placeholder="Resíduos aceitos"
              className="input"
              value={residuos}
              onChange={(e) => setResiduos(e.target.value)}
              required
            />
            <input
              type="number"
              step="any"
              placeholder="Latitude"
              className="input"
              value={latitude}
              onChange={(e) => setLatitude(e.target.value)}
              required
            />
            <input
              type="number"
              step="any"
              placeholder="Longitude"
              className="input"
              value={longitude}
              onChange={(e) => setLongitude(e.target.value)}
              required
            />
            <button className="cadastro-button">Cadastrar</button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  )
}


export default Cadastrar