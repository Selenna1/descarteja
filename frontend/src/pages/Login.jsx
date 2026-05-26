import { useState } from "react"

function Login() {
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")
  async function fazerLogin(e) {
    e.preventDefault()
    const resposta = await fetch(
      "https://descarteja-backend.onrender.com/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          senha
        })
      }
    )
    const dados = await resposta.json()
    if (dados.token) {
      localStorage.setItem(
        "token",
        dados.token
      )
      alert("Login realizado com sucesso")
    } else {
      alert(dados.mensagem)
    }
  }
  return (
    <div className="container">
      <h1>Login Admin</h1>
      <form onSubmit={fazerLogin}>
        <input
          type="email"
          placeholder="Email"
          className="input"
          value={email}
          onChange={(e) =>
            setEmail(e.target.value)
          }
        />
        <input
          type="password"
          placeholder="Senha"
          className="input"
          value={senha}
          onChange={(e) =>
            setSenha(e.target.value)
          }
        />
        <button className="button">Entrar</button>
      </form>
    </div>
  )
}
export default Login