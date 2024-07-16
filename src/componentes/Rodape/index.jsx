import styled from "styled-components"

const FooterEstilizado = styled.footer`
background-color: #212121;
justify-content: center;
display: flex;
padding: 25px 0;
border-top: solid 5px blue;
`


export default function Rodape() {
    return (
        <FooterEstilizado>
            <img src="/imagens/Logo.png" alt=""/>
        </FooterEstilizado>
    )
}