import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Cadastro from "./Pages/Cadastro/Cadastro";
import Plano from "./Pages/Subscriptions/Plano";

function App() {

  return (
    <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/sign-up" element={<Cadastro/>}/>
        <Route path="/subscriptions" element={<Plano/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
