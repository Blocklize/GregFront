import axios from 'axios'

export const api = axios.create({
  baseURL: `https://greg-api.blocklize.io/auth/google/redirect`,
})