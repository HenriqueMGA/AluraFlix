import { useContext, useState } from "react"
import { VideosContext } from "../Video"
import { v4 as uuidv4 } from 'uuid';


export default function useVideosContext() {
    const { videos, setVideos } = useContext(VideosContext)
    const id = uuidv4()
    const [titulo, setTitulo] = useState('')
    const [categoria, setCategoria] = useState('')
    const [imagem, setImagem] = useState('')
    const [link, setLink] = useState('')
    const [descricao, setDescricao] = useState('')



    const aoNovoVideoAdicionado = (video) => {
        setVideos([...videos, video])
    }

    const aoSalvar = (evento) => {
        evento.preventDefault()
        aoNovoVideoAdicionado({
            titulo: titulo,
            categoria: categoria,
            imagem: imagem,
            link: link,
            descricao: descricao,
            id: id
        })
        setTitulo('')
        setCategoria('')
        setImagem('')
        setLink('')
        setDescricao('')
        
    }

    const excluirVideo = (id) => {
        const novosVideos = videos.filter((video) => video.id !== id);
        setVideos(novosVideos);
    }

    return {
        videos,
        setVideos,
        aoSalvar,
        titulo,
        categoria,
        imagem,
        link,
        descricao,
        setTitulo,
        setCategoria,
        setImagem,
        setLink,
        setDescricao,
        excluirVideo
    }
}