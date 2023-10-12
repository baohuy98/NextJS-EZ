import axiosClient from "./axios-client"
import { loginPayload } from "@/models/index"


export const authApi = {
    login(payload: loginPayload) {
        return axiosClient.post('/login', payload)
    },

    logout() {
        return axiosClient.post('/logout')
    },

    getProfile() {
        return axiosClient.get('/profile')
    },

}