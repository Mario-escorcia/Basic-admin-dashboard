import { endpoints } from "@/api/apiClient"
import axios from "axios"

export const getComentSvc = async () => {
    return await axios.get(endpoints.getComments)
}