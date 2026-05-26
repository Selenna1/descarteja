import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import "../styles/home.css"
import "../styles/global.css"
function Home() {
  return(
    <div>
      <Navbar />
      <header className="hero">
        <img src="/teste.png" alt="DescarteJá" className="home-logo" />
        <p className="hero-subtitle">Plataforma Web para Descarte de Lixo Eletrônico</p>
      </header>
      <main className="container"> 
        <section className="card">
          <h2 className="title">Sobre o projeto</h2>
          <p>O DescarteJá é uma plataforma para auxiliar a população de Belém do Pará no descarte correto de lixo eletrônico.</p>
        </section>
        <section className="card">
          <h2 className="title">Importância da reciclagem</h2>
          <p>O descarte incorreto de lixo eletrônico pode causar sérios danos ao meio ambiente e á saúde pública.</p>
        </section>
        <section className="card">
          <h2 className="title">Objetivo do sistema</h2>
          <p>Facilitar o acesso da população a informação sobre reciclagem eletrônica e incentivar práticas sustentáveis através de uma plataforma digital simples e acessível.</p>
        </section>
        <section className="card">
         <h2 className="title">O que é lixo eletrônico?</h2> 
         <p> O lixo eletrônico é composto por equipamentos eletrônicos descartados, como computadores, celulares, baterias, televisores e cabos. Quando descartados incorretamente, esses materiais podem causar sérios impactos ambientais.</p>
        </section>
        <section className="card">
          <h2 className="title">Impactos ambientais</h2>
          <p>Componentes eletrônicos possuem substâncias tóxicas que podem cotaminar o solo, rios e lençóis freáticos, afetando o meio ambiente e a saúde da população.</p>
        </section>
        <section className="card">
          <h2 className="title">Sustentabilidade e Conscientização</h2>
          <p>O DescarteJá busca incentivar práticas sustentáveis por meio da conscientização ambiental e da facilitação do acesso a pontos de coleta de resíduos eletrônicos. </p>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Home