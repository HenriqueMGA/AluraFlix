import styled from "styled-components"
import Input from "../Input"
import useVideosContext from "../../hooks/useVideosContext"

const DivPersonalizado = styled.div`
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
`

const DivInput = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`

const BotoesDiv = styled.div`
    display: flex;
    gap: ${props => props.$modalZoom ? '225px' : '30px'};
`

const BotaoGuardar = styled.input`
    width: 180px;
    padding: 10px 0;
    border: solid 4px #2271D1;
    font-size: 20px;
    border-radius: 10px;
    background-color: ${props => props.$modalZoom ? '#000000' : 'rgba(0, 0, 0, 0)'};
    color: ${props => props.$modalZoom ? '#2271D1' : '#FFFFFF'};
    font-family: var(--fonte-primaria);
    font-weight: 900;
    cursor: pointer;
`

const BotaoLimpar = styled.input`
    width: 180px;
    padding: 10px 0;
    border: solid 4px #FFFFFF;
    font-size: 20px;
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0);
    color: #FFFFFF;
    font-family: var(--fonte-primaria);
    font-weight: 900;
    cursor: pointer;
`

const TituloPersonalizado = styled.h2`
    width: 1172px;
    padding: 10px 0;
    border-top: ${props => props.$modalZoom ? '' : 'solid 3px #262626'};
    border-bottom: ${props => props.$modalZoom ? '' : 'solid 3px #262626'};
    font-size: ${props => props.$modalZoom ? '60px' : '36px'};
    font-family: var(--fonte-primaria);
    font-weight: ${props => props.$modalZoom? '900' : '500'};
    color: ${props => props.$modalZoom ? '#2271D1' : ''};
`

const LabelPersonalizada = styled.label`
    font-size: 20px;
    font-family: var(--fonte-primaria);
    font-weight: 500;
    color: ${props => props.$modalZoom ? '#FFFFFF' : ''};
`

const FormPersonalizado = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: ${props => props.$modalZoom ? '0 200px' : ''};
`

export default function Formulario({ categorias, modalZoom, tituloPersonalizado, video }) {
    const { aoSalvar, titulo, categoria, imagem, link, descricao, setTitulo, setCategoria, setImagem, setLink, setDescricao } = useVideosContext()

    return (
        <FormPersonalizado $modalZoom={modalZoom}>
            <TituloPersonalizado $modalZoom={modalZoom}>{tituloPersonalizado}</TituloPersonalizado>
            <DivPersonalizado 
                $modalZoom={modalZoom} 
                onSubmit={aoSalvar}>
                <DivInput>
                    <LabelPersonalizada $modalZoom={modalZoom}>Título</LabelPersonalizada>
                    <Input 
                        valor={titulo} 
                        modalZoom={modalZoom} 
                        type="text" 
                        aoAlterado={valor => setTitulo(valor)} 
                        placeholder="Coloque o título do vídeo" 
                        required="required">{modalZoom ? video.titulo : ''}</Input>
                </DivInput>
                <DivInput>
                    <LabelPersonalizada $modalZoom={modalZoom}>Categoria</LabelPersonalizada>
                    <Input 
                        valor={categoria} 
                        modalZoom={modalZoom} 
                        categorias={categorias} 
                        aoAlterado={valor => setCategoria(valor)} 
                        type="change" 
                        placeholder="Selecione uma categoria" 
                        required="required">{modalZoom ? video.categoria : ''}</Input>
                </DivInput>
                <DivInput>
                    <LabelPersonalizada $modalZoom={modalZoom}>Imagem</LabelPersonalizada>
                    <Input 
                        valor={imagem} 
                        type="text" 
                        modalZoom={modalZoom} 
                        aoAlterado={valor => setImagem(valor)} 
                        placeholder="Digite o link da imagem" 
                        required="required">{modalZoom ? video.imagem : ''}</Input>
                </DivInput> 
                <DivInput>
                    <LabelPersonalizada $modalZoom={modalZoom}>Vídeo</LabelPersonalizada>
                    <Input 
                        valor={link} 
                        type="text" 
                        modalZoom={modalZoom} 
                        aoAlterado={valor => setLink(valor)} 
                        placeholder="Digite o link do vídeo" 
                        required="required">{modalZoom ? video.link : ''}</Input>
                </DivInput>
                <DivInput>
                    <LabelPersonalizada $modalZoom={modalZoom}>Descrição</LabelPersonalizada>
                    <Input 
                        valor={descricao} 
                        modalZoom={modalZoom} 
                        aoAlterado={valor => setDescricao(valor)} 
                        placeholder="Sobre o que é esse vídeo?">{modalZoom ? video.descricao : ''}</Input>
                </DivInput>
            </DivPersonalizado>
            <BotoesDiv $modalZoom={modalZoom}>
                <BotaoGuardar 
                    type="submit" 
                    value="Guardar" 
                    $modalZoom={modalZoom} />
                <BotaoLimpar 
                    type="reset" 
                    value="Limpar" />
            </BotoesDiv>
        </FormPersonalizado>
    )
}