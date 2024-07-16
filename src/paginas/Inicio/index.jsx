import Banner from "../../componentes/Banner";
import SessaoVideos from "../../componentes/SessaoVideos";




export default function Inicio({ categorias, setVideoSelecionado }) {
    return (
        <>
            <Banner />  
            <SessaoVideos setVideoSelecionado={setVideoSelecionado} categorias={categorias} />
        </>
    )
}