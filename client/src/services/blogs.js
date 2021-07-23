import axios from 'axios'

const baseUrl = '/api/blogs'

let token = null

// sets authorization token for requests
const setToken = (newToken) => {
  token = `bearer ${newToken}`
}

// returns all entries in database
const getAll = async () => {
  const request = axios.get(baseUrl)
  const response = await request
  return response.data
}

// sets authorization header for POST request and
// posts new object to database
const create = async (newObject) => {
  const config = {
    headers: { Authorization: token },
  }
  const response = await axios.post(baseUrl, newObject, config)
  return response.data
}

// enables editing existing entries in the database.
const update = async (id, newObject) => {
  const config = {
    headers: { Authorization: token },
  }
  const link = `${baseUrl}/${id}`
  const request = axios.put(link, newObject, config)
    .catch((err) => { throw new Error(err) })
  const response = await request
  return response.data
}

const removeBlog = async (id) => {
  const config = {
    headers: { Authorization: token },
  }
  await axios.delete(`${baseUrl}/${id}`, config)
  return getAll()
}

export default {
  getAll, create, update, setToken, removeBlog,
}
