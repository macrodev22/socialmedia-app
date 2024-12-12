import axios from "axios";

const BASE_URL = 'http://localhost:8000/api'

const client = axios.create({
    withCredentials: true,
    baseURL: BASE_URL
})


export default client