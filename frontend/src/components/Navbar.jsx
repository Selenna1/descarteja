import { Link } from "react-router-dom"
import "../styles/navbar.css"

function Navbar() {
  const adminLogado = localStorage.getItem("token")
   function logout() {
    localStorage.removeItem("token")
    indow.location.reload()
    }
  return (
    <nav className="navbar">
      <img src="/teste.png" alt="DescarteJá" className="logo" />
      <div className="navbar-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/pontos" className="nav-link">Pontos de Coleta</Link>
        <Link to="/cadastrar" className="nav-link">Cadastrar</Link>
        {adminLogado && (
          <button className="logout-button"onClick={logout}>Sair</button>
        )}
      </div>
    </nav>
  )
}

export default Navbar