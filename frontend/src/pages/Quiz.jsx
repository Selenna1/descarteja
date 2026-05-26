import { useState } from "react"
import "../styles/quiz.css"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function Quiz() {
  const perguntas = [
    {
      pergunta:
        "Qual destes NÃO deve ir no lixo comum?",
      opcoes: [
        "Pilhas",
        "Papel",
        "Casca de banana",
        "Folhas"
      ],
      resposta: "Pilhas"
    },
    {
      pergunta:
        "O lixo eletrônico pode contaminar:",
      opcoes: [
        "O solo",
        "Rios",
        "Lençóis freáticos",
        "Todos os anteriores"
      ],
      resposta:
        "Todos os anteriores"
    },
    {
      pergunta:
        "Qual é o objetivo do descarte correto?",
      opcoes: [
        "Poluir menos",
        "Proteger o meio ambiente",
        "Reciclar materiais",
        "Todos os anteriores"
      ],
      resposta:
        "Todos os anteriores"
    },
    {
      pergunta:
        "Qual destes é considerado lixo eletrônico?",

      opcoes: [
        "Celular",
        "Garrafa PET",
        "Casca de fruta",
        "Jornal"
      ],
      resposta:
        "Celular"
    },
    {
      pergunta:
        "As baterias possuem materiais:",

      opcoes: [
        "Tóxicos",
        "Comestíveis",
        "Naturais",
        "Orgânicos"
      ],
      resposta:
        "Tóxicos"
    },
    {
      pergunta:
        "Reciclar eletrônicos ajuda a:",
      opcoes: [
        "Reduzir poluição",
        "Economizar recursos",
        "Preservar o meio ambiente",
        "Todos os anteriores"
      ],
      resposta:
        "Todos os anteriores"
    },
    {
      pergunta:
        "Onde devemos descartar lixo eletrônico?",
      opcoes: [
        "No rio",
        "Em pontos de coleta",
        "Na rua",
        "No lixo comum"
      ],
      resposta:
        "Em pontos de coleta"
    },
    {
      pergunta:
        "Qual destes pode ser reciclado?",
      opcoes: [
        "Cabos",
        "Computadores",
        "Celulares",
        "Todos os anteriores"
      ],
      resposta:
        "Todos os anteriores"
    },
    {
      pergunta:
        "O descarte incorreto pode causar:",
      opcoes: [
        "Contaminação ambiental",
        "Problemas de saúde",
        "Poluição",
        "Todos os anteriores"
      ],
      resposta:
        "Todos os anteriores"
    },
    {
      pergunta:
        "O DescarteJá tem como objetivo:",
      opcoes: [
        "Ajudar no descarte correto",
        "Incentivar reciclagem",
        "Conscientizar usuários",
        "Todos os anteriores"
      ],
      resposta:
        "Todos os anteriores"
    }
  ]
  const [perguntaAtual, setPerguntaAtual] =
    useState(0)
  const [pontuacao, setPontuacao] =
    useState(0)
  const [finalizado, setFinalizado] =
    useState(false)
  function responder(opcao) {
    if (
      opcao ===
      perguntas[perguntaAtual].resposta
    ) {
      setPontuacao(pontuacao + 1)
    }
    const proximaPergunta =
      perguntaAtual + 1
    if (
      proximaPergunta <
      perguntas.length
    ) {
      setPerguntaAtual(proximaPergunta)
    } else {
      setFinalizado(true)
    }
  }
  return (
    <div>
      <Navbar />
      <div className="quiz-container">
        <h1 className="quiz-title">
          ♻️ Quiz Ambiental
        </h1>
        {finalizado ? (
          <div>
            <h2 className="quiz-question">
              Você acertou {pontuacao} de{" "}
              {perguntas.length}
            </h2>
          </div>
        ) : (
          <div>
            <h2>
              {
                perguntas[perguntaAtual]
                  .pergunta
              }
            </h2>
            {perguntas[
              perguntaAtual
            ].opcoes.map((opcao) => (
              <button
                key={opcao}
                className="quiz-button"
                onClick={() =>
                  responder(opcao)
                }
              >
                {opcao}
              </button>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  )
}
export default Quiz