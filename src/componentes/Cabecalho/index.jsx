import styled from "styled-components"

const CabecalhoEstilizado = styled.header`
    background-color: #212121;
    display: flex;
    justify-content: space-between;
    padding: 43px 51px;
    border-bottom: solid 5px blue;
`

const BotaoContainer = styled.div`
    display: flex;
    gap: 25px;
`

const BotaoHome = styled.a`
    background-color: #000000;
    color: blue;
    border: 2px solid blue;
    padding: 10px 40px;
    border-radius: 10px;
    text-decoration: none;
    font-family: var(--fonte-primaria);
    font-weight: 900;
`

const BotaoNovoVideo = styled.a`
    background-color: rgba(0, 0, 0, 0);
    color: white;
    border: 2px solid white;
    padding: 10px 25px;
    border-radius: 10px;
    text-decoration: none;
    font-family: var(--fonte-primaria);
    font-weight: 900;
`


export default function Cabecalho() {
    return (
        <CabecalhoEstilizado>
            <img src="/imagens/Logo.png" alt=""/>
            <BotaoContainer>
                <BotaoHome href="./">Home</BotaoHome>
                <BotaoNovoVideo href="./novo-video">Novo Vídeo</BotaoNovoVideo>
            </BotaoContainer>
        </CabecalhoEstilizado>
    )
}