import axios from "axios"

export const metaphorJsApi = axios.create({
    baseURL: `https://${process.env.METAPHOR_JS_API_BASE_URL}`
})

export const metaphorGoApi = axios.create({
    baseURL: `https://${process.env.METAPHOR_GO_API_BASE_URL}`
})
