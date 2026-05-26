const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb://admin_selenna1:Descarte_apropriado_13@ac-jhhh8i4-shard-00-00.psmr3mo.mongodb.net:27017,ac-jhhh8i4-shard-00-01.psmr3mo.mongodb.net:27017,ac-jhhh8i4-shard-00-02.psmr3mo.mongodb.net:27017/?ssl=true&replicaSet=atlas-n0lw5y-shard-0&authSource=admin&appName=Cluster0",
);
mongoose.connection.on("connected", () => {
  console.log("MongoDB conectado");
});

const pontoSchema = new mongoose.Schema({
  nome: String,
  endereco: String,
  residuos: String,
  latitude: Number,
  longitude: Number,
  avaliacoes:[
    {nota: Number,
      comentario: String,
      data: {
        type: Date,
        default: Date.now
      }
    }
  ]
});
const Ponto = mongoose.model("Ponto", pontoSchema);
const usuarioSchema = new mongoose.Schema({
  email: String,
  senha: String
})
const Usuario = mongoose.model("Usuario", usuarioSchema)
app.get("/pontos", async (req, res) => {
  const pontos = await Ponto.find();
  res.json(pontos);
});

app.post("/pontos", async (req, res) => {
  const novoPonto = new Ponto(req.body);
  await novoPonto.save();
  res.json(novoPonto);
});

function verificarToken(req, res, next) {
  const token = req.headers.authorization
  if (!token) {
    return res.status(401).json({
      mensagem: "Acesso negado"
    })
  }
  try {
    const tokenLimpo = token.replace(
      "Bearer ",
      ""
    )
    jwt.verify(
      tokenLimpo,
      "descarteja_segredo_muito_segredo_mesmo"
    )
    next()
  } catch (erro) {
    return res.status(401).json({
      mensagem: "Token inválido"
    })
  }
}

app.delete("/pontos/:id", verificarToken, async (req, res) => {
  await Ponto.findByIdAndDelete(req.params.id);
  res.json({
    mensagem: "Ponto removido com sucesso",
  });
});
app.put("/pontos/:id", verificarToken, async (req, res) => {
  const pontoAtualizado = await Ponto.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
  );
  res.json(pontoAtualizado);
});
app.post("/pontos/:id/avaliacoes", async (req, res) => {
  const { nota, comentario } = req.body
  const ponto = await Ponto.findById(req.params.id)
  ponto.avaliacoes.push({
    nota,
    comentario
  })
  await ponto.save()
  res.json(ponto)
})
/*
app.post("/register", async (req, res) => {
  const { email, senha } = req.body
  const hashedSenha = await bcrypt.hash(senha, 10)
  const novoUsuario = new Usuario({
    email,
    senha: hashedSenha
  })
  await novoUsuario.save()
  res.json({
    mensagem: "Admin criado com sucesso"
  })
})
*/  
app.post("/login", async (req, res) => {
  const { email, senha } = req.body
  const usuario = await Usuario.findOne({
    email
  })
  if (!usuario) {
    return res.status(400).json({
      mensagem: "Usuário não encontrado"
    })
  }
  const senhaCorreta = await bcrypt.compare(
    senha,
    usuario.senha
  )
  if (!senhaCorreta) {
    return res.status(400).json({
      mensagem: "Senha incorreta"
    })
  }
  const token = jwt.sign(
    { id: usuario._id },
    "descarteja_segredo_muito_segredo_mesmo",
    { expiresIn: "1d" }
  )
  res.json({ token })
})

const PORT = process.env.PORT || 3000;
app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
