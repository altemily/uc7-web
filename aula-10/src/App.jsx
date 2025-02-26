import React from "react"
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './pages/Home'
import Contato from "./pages/Contato"
import Sobre from "./pages/Sobre"


function App() {

  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/Contato" element={<Contato />}/>
        <Route path="/Sobre" element={<Sobre />}/>
      </Routes>
      </BrowserRouter>
  )
}

export default App