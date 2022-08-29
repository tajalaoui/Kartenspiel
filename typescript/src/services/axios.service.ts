import axios, { AxiosInstance } from "axios"

const config: object = {
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
}

const axiosInstance: AxiosInstance = axios.create(config)

export default axiosInstance
