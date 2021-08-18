import {useState, useEffect} from "react";
import youtube from "../apis/youtube";

const useVideos = (defaultSearchTerm) => {
    const [videos, setVideos] = useState([]);


    useEffect (() => {
        search(defaultSearchTerm);
    }, [defaultSearchTerm]);//== componentDidMount()


        //kod funcijskih komponenti je potrebna ključna reč konst(const)
        const search = async term => {

            const response = await youtube.get("/search", {
                params: {
                    q: term
                }
            });
    
            setVideos(response.data.items)
        };
    //(video) => setSelectedVideo(video) == setSelectedVideo
    
    return [videos, search];
};

export default useVideos;