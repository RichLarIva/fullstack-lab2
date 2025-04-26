import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 5000;

// Set up Axios to connect to the backend
const api = axios.create({
    baseURL: `http://localhost:${5901}/api/v1`,
    headers: {
        "Content-Type": "application/json",
    },
})

export default api;