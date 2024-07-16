import styled from "styled-components"
import VideoCard from "./VideoCard"
import useVideosContext from "../../../hooks/useVideosContext"

const TituloEstilizado = styled.h2`
    border-radius: 15px;
    padding: 20px;
    max-width: 430px;
    max-height: 70px;
    text-align: center;
    font-family: var(--fonte-primaria);
    font-weight: 800;
    font-size: 32px;
`

const VideoDiv = styled.div`
    display: flex;
    gap: 30px;  
`

export default function CategoriaSessao({ titulo, cor, setVideoSelecionado }) {
    const { videos } = useVideosContext()

    return (
        <>
            <TituloEstilizado style={{ backgroundColor: cor }}>
                {titulo}
            </TituloEstilizado>
            <VideoDiv>
                {videos.map(video => video.categoria === titulo ? <VideoCard setVideoSelecionado={setVideoSelecionado} key={video.id} video={{...video}} cor={cor} imagem={video.imagem} /> : "")}
                
            </VideoDiv>
            
        </>
    )
}