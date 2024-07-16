import styled from "styled-components";

const InputPersonalizado = styled.input`
    width: 560px;
    border: ${props => props.$modalZoom ? 'solid 2px #2271D1' : 'solid 2px #262626'};;
    border-radius: 10px;
    padding: 16px 10px;
    font-size: 20px;
    background-color: rgba(0, 0, 0, 0);
    color: #A5A5A5;
    font-family: var(--fonte-primaria);
    font-weight: 500;
`
const TextAreaEstilizado = styled.textarea`
    width: 560px;
    border: ${props => props.$modalZoom ? 'solid 2px #2271D1' : 'solid 2px #262626'};;
    border-radius: 10px;
    padding: 16px 10px;
    font-size: 20px;
    background-color: rgba(0, 0, 0, 0);
    color: #A5A5A5;
    height: 220px;
    font-family: var(--fonte-primaria);
    font-weight: 500;
`

const SelectPersonalizado = styled.select`
    width: 580px;
    border: ${props => props.$modalZoom ? 'solid 2px #2271D1' : 'solid 2px #262626'};
    border-radius: 10px;
    padding: 16px 10px;
    font-size: 20px;
    background-color: rgba(0, 0, 0, 0);
    color: #A5A5A5;
    font-family: var(--fonte-primaria);
    font-weight: 500;
`

const OptionPersonalizada = styled.option`
    color: #000000;
`

export default function Input({ type, placeholder, required, categorias, valor, aoAlterado, modalZoom, video, children }) {
    const aoDigitado = (evento) => {
        aoAlterado(evento.target.value)
    }

    if (required) {
        if (type === "text") {
            return (<InputPersonalizado defaultValue={children ? children : video} onChange={aoDigitado} type={type} placeholder={video ? video : placeholder} required={required} $modalZoom={modalZoom} />)
        } else if (type === "change") {
            return (
                <SelectPersonalizado $modalZoom={modalZoom}>
                    {categorias.map((categoria) => <OptionPersonalizada defaultValue={video ? video : valor} onChange={evento => aoAlterado(evento.target.value)} key={categoria.titulo}>{categoria.titulo}</OptionPersonalizada>)}
                </SelectPersonalizado>
            )
        }
        
    } else {
        return (<TextAreaEstilizado $modalZoom={modalZoom} defaultValue={children ? children : valor} onChange={aoDigitado} placeholder={video ? video : placeholder} />)
    }
}