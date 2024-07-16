import { createContext, useContext, useState } from "react";
import Videos from "./videos.json";


export const VideosContext = createContext()

export default function VideosProvider({ children }) {
    const [videos, setVideos] = useState(Videos)

    return (
        <VideosContext.Provider value={{videos, setVideos}}>
            {children}
        </VideosContext.Provider>
    )
}

