import axios from 'axios'

export default axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
  // Enable send automatically httpOnly cookies
  withCredentials: true
})
