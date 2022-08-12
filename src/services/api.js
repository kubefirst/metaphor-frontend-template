import axios from "axios"

export const metaphorJsApi = axios.create({
    baseURL: process.env.METAPHOR_JS_API_BASE_URL
})

export const metaphorGoApi = axios.create({
    baseURL: process.env.METAPHOR_GO_API_BASE_URL
})
