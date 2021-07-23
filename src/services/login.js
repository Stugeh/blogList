import axios from 'axios'

const baseUrl = '/api/login'

// gets login credentials and retrieves the password hash for the username
const login = async (credentials) => {
  const res = await axios.post(baseUrl, credentials)
  return res.data
}

export default { login }
