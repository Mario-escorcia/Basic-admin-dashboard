import { endpoints } from "@/api/apiClient"
import axios from "axios"

export const getComentSvc = async () => {
    return await axios.get(endpoints.getComments)
}

export const getSpecificComment = async (postId : number) => {
    let params = new URLSearchParams({ postId: postId.toString() })
    return await axios.get(endpoints.getComments + "?" + params)
}