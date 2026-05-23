const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

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
});
const Ponto = mongoose.model("Ponto", pontoSchema);
app.get("/pontos", async (req, res) => {
  const pontos = await Ponto.find();
  res.json(pontos);
});

app.post("/pontos", async (req, res) => {
  const novoPonto = new Ponto(req.body);
  await novoPonto.save();
  res.json(novoPonto);
});
app.delete("/pontos/:id", async (req, res) => {
  await Ponto.findByIdAndDelete(req.params.id);
  res.json({
    mensagem: "Ponto removido com sucesso",
  });
});
app.put("/pontos/:id", async (req, res) => {
  const pontoAtualizado = await Ponto.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true },
  );
  res.json(pontoAtualizado);
});

const PORT = process.env.PORT || 3000;
app.listen(3000, () => {
  console.log("Servidor rodando na porta 3000");
});
