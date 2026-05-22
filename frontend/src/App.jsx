import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import Pontos from "./pages/Pontos";
import Cadastrar from "./pages/Cadastrar";

function App(){
  return(
    <BrowserRouter>
      <Routes>
        <Route path="/cadastrar" element={<Cadastrar />} />
        <Route path="/" element={<Home />} />
        <Route path="/pontos" element={<Pontos />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App