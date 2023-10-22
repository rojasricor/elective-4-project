import axios from 'axios'

// BaseURL: relative url /api when request do from client components
export default axios.create({ baseURL: '/api' })
