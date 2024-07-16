import styled from "styled-components"
import useVideosContext from "../../../../hooks/useVideosContext"
import { Link } from "react-router-dom"

const BotaoNome = styled.p`
    font-size: 16px;
    font-family: var(--fonte-secundaria);
    font-weight: 800;
`

const BotaoEstilizado = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
    cursor: pointer;
`

const CardEstilizado = styled.div`
    display: flex;
    flex-direction: column;
`

const BotoesDiv = styled.div`
    background-color: #000000;
    display: flex;
    gap: 70px;
    border: solid 2px;
    justify-content: center;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
`

const ImagemEstilizada = styled.img`
    border: solid 2px;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
`

const IconeEstilizado = styled.img`
    max-height: 28px;
`


export default function VideoCard({ cor, imagem, video, setVideoSelecionado }) {
    const { excluirVideo, setTitulo, setCategoria, setImagem, setLink, setDescricao } = useVideosContext()
    const handleExcluir = (id) => {
        excluirVideo(id);
    };
    return (
        <CardEstilizado>
            <Link to={video.link} target="blank">
                <ImagemEstilizada src={imagem} alt="" style={{ borderColor: cor }} />
            </Link>
            <BotoesDiv style={{ borderColor: cor }}>
                <BotaoEstilizado onClick={() => handleExcluir(video.id)}>
                    <IconeEstilizado src="icones/deletar.png" alt="" />
                    <BotaoNome>DELETAR</BotaoNome>
                </BotaoEstilizado>
                <BotaoEstilizado onClick={() => {
                    setVideoSelecionado(video)
                    setTitulo(video.titulo)
                    setCategoria(video.categoria)
                    setImagem(video.imagem)
                    setLink(video.link)
                    setDescricao(video.descricao)
                }}>
                    <IconeEstilizado src="icones/editar.png" alt="" />
                    <BotaoNome>EDITAR</BotaoNome>
                </BotaoEstilizado>
            </BotoesDiv>
        </CardEstilizado>
    )
}