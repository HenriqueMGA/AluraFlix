import { BrowserRouter, Route, Routes } from "react-router-dom"
import Inicio from "./paginas/Inicio"
import NovoVideo from "./paginas/NovoVideo"
import EstilosGlobais from "./componentes/EstilosGlobais"
import Cabecalho from "./componentes/Cabecalho"
import Rodape from "./componentes/Rodape"
import ModalZoom from "./componentes/ModalZoom"
import useVideosContext from "./hooks/useVideosContext"
import VideosProvider from "./Video"
import { useState } from "react"


const categorias = [
  {
    titulo: "Front-End",
    cor: "#6BD1FF"
  },
  {
    titulo: "Back-End",
    cor: "#00C86F"
  },
  {
    titulo: "Mobile",
    cor: "#FFBA05"
  }
]

function App() {
  const [videoSelecionado, setVideoSelecionado] = useState(null)

  return (
    <BrowserRouter>
      <VideosProvider>
        <EstilosGlobais />
        <Cabecalho />
        <Routes>
          <Route path="/" element={<Inicio setVideoSelecionado={setVideoSelecionado} categorias={categorias} />} />
          <Route path="/novo-video" element={<NovoVideo categorias={categorias} />} />
        </Routes>
        <Rodape />
        {videoSelecionado ? <ModalZoom video={videoSelecionado} aoFechar={() => setFotoSelecionada(null)} categorias={categorias} /> : ''}
      </VideosProvider>
    </BrowserRouter>
  )
}

export default App
