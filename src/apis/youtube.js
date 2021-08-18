import axios from "axios";





const KEY = "AIzaSyB4odZzf2Cmwm5POQCyuZXbEBF9N-aCanY";



export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: "snippet",
        maxResults: 5,
        key: KEY
    }
});


