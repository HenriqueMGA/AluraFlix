import styled from "styled-components"
import CategoriaSessao from "./CategoriaSessao"

const CorpoEstilizado = styled.main`
    background-color: #191919;
    padding: 42px 42px 100px;
`


export default function SessaoVideos({ categorias, setVideoSelecionado }) {
    return (     
        <CorpoEstilizado>
            {categorias.map(categoria => <CategoriaSessao key={categoria.titulo} titulo={categoria.titulo} cor={categoria.cor} setVideoSelecionado={setVideoSelecionado} />)}
        </CorpoEstilizado>
    )
}
