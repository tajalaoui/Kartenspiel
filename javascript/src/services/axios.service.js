import axios from "axios"

const config = {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
}

const axiosInstance = axios.create(config)

export default axiosInstance
