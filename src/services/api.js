import axios from 'axios'

export const key = 'cb5fa221'

const api = axios.create({
    baseURL: 'https://api.hgbrasil.com/'
})

export default api

// https://api.hgbrasil.com/weather?key=cb5fa221&lat=-23.682&lon=-46.875