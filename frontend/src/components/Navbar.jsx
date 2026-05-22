import { Link } from "react-router-dom"
import "../styles/navbar.css"

function Navbar() {
  return (
    <nav className="navbar">
      <img src="/teste.png" alt="DescarteJá" className="logo" />
      <div className="navbar-links">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/pontos" className="nav-link">Pontos de Coleta</Link>
        <Link to="/cadastrar" className="nav-link">Cadastrar</Link>
      </div>
    </nav>
  )
}

export default Navbar