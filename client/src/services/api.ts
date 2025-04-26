import axios from "axios";

// Set up Axios to connect to the backend
const api = axios.create({
    baseURL: `http://localhost:${5901}/api/v1`,
    headers: {
        "Content-Type": "application/json",
    },
})

export default api;