import styled from "styled-components"



const SeloEstilizado = styled.h1`
    font-size: 48px;
    padding: 10px;
    border-radius: 15px;
    background-color: #6BD1FF;
    font-family: var(--fonte-secundaria);
    font-weight: 800;
    width: 290px;
    text-align: center;
`

const TituloEstilizado = styled.h2`
    font-size: 46px;
    font-family: var(--fonte-secundaria);
    font-weight: 400;
`

const ParagrafoEstilizado = styled.p`
    font-size: 18px;
    font-family: var(--fonte-secundaria);
    font-weight: 300;
`

const InformacoesContainer = styled.div`
    display: flex;
    flex-direction: column;
    max-height: 333px;
`

const ApresentacaoContainer = styled.div`
    display: flex;
    padding: 213px 41px 120px 41px;
    gap: 50px;
    background-color: #001233;
`

export default function Banner() {
    return (
        <ApresentacaoContainer 
            style={{ 
                backgroundImage: 'url(/imagens/banner.png)', 
                backgroundRepeat: "no-repeat", 
                backgroundSize: '100%'  
            }}
        >
            <InformacoesContainer>
                <SeloEstilizado>FRONT END</SeloEstilizado>
                <TituloEstilizado>SEO com React</TituloEstilizado>
                <ParagrafoEstilizado>Eu to aqui pra nesse vídeo dizer que a gente vai aprender a começar uma app inspirada no desenho Pokémon com Nextjs e React, ver algumas dicas sobre performance e de quebra conhecer uma plataforma sensacional pra fazer deploy que é a Vercel. Tudo em 22 minutos nesse vídeo feito com todo o carinho do mundo construindo uma "Pokedex"! </ParagrafoEstilizado>
            </InformacoesContainer>
            <img src="/imagens/player.png" alt=""/>  
        </ApresentacaoContainer>
    )
}