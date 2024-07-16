import styled from "styled-components"
import Formulario from "../Formulário"
import botaoIcone from "./fechar.png"

const Overlay = styled.div`
    background-color: rgba(3, 17, 52, 0.7);
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
`

const DialogEstilizado = styled.dialog`
    position: absolute;
    top: 294px;
    background: transparent;
    padding: 0;
    border: 0;
    width: 1000px;
    display: flex;
    justify-content: center;
    background-color: #03122F;
    border: solid 3px #6BD1FF;
    border-radius: 10px;
    flex-direction: column-reverse;
    padding: 84px 0;
`

const FormEstilizado = styled.form`
    position: relative;
    bottom: 60px;
    left: 950px;
`


const ModalZoom = ({ video, categorias, aoFechar }) => {
    return (
        <>
            {video ? <>
                <Overlay/>
                <DialogEstilizado open={!!video} onClose={aoFechar}>
                    <>
                        <Formulario tituloPersonalizado="Editar Card:" categorias={categorias} modalZoom={1} video={video}/>                    
                    </>
                    <FormEstilizado method="dialog">
                        <botaoIcone formMethod="dialog">
                            <img src={botaoIcone} alt="Icone de fechar" onClick={() => window.location.reload()} />
                        </botaoIcone>
                    </FormEstilizado>
                </DialogEstilizado>
                </> : 0
            }
        </>
    )
}

export default ModalZoom