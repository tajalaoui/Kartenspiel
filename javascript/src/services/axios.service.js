import axios from "axios"

const config = {
  // baseURL: "http://localhost:3000/api",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
}

const axiosInstance = axios.create(config)

export default axiosInstance
