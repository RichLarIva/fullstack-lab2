import axios from "axios";


const backendPort = import.meta.env.PORT || 5901;

// Set up Axios to connect to the backend
const api = axios.create({
    baseURL: `http://localhost:${backendPort}/api/v1`,
    headers: {
        "Content-Type": "application/json",
    },
})

export default api;