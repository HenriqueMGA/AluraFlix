import styled from "styled-components"
import Formulario from "../../componentes/Formulário"

const PaginaNovoVideo = styled.section`
    background-color: #191919;
    padding: 71px 134px;
    display: flex;
    flex-direction: column;
    gap: 47px;
`

const DivPersonalizada = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    text-align: center;
`

const H1Personalizado = styled.h1`
    font-size: 60px;
    font-family: var(--fonte-secundaria);
    font-weight: 900;
`

const PPersonalizado = styled.p`
    font-size: 20px;
    font-family: var(--fonte-secundaria);
    font-weight: 400;
`

export default function NovoVideo({ categorias }) {
    return (
        <PaginaNovoVideo>
            <DivPersonalizada>
                <H1Personalizado>NOVO VÍDEO</H1Personalizado>
                <PPersonalizado>COMPLETE O FORMULÁRIO PARA CRIAR UM NOVO CARD DE VÍDEO</PPersonalizado>
            </DivPersonalizada>
            <Formulario tituloPersonalizado="Criar Card" categorias={categorias} />
        </PaginaNovoVideo>
    )
}