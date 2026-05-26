import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Pontos from "./pages/Pontos";
import Cadastrar from "./pages/Cadastrar";
import Login from "./pages/Login"

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastrar" element={<Cadastrar />} />
        <Route path="/" element={<Home />} />
        <Route path="/pontos" element={<Pontos />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App