import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const addNew = async (data) => {
  const response = await axios.post(baseUrl, data)
  return response.data
}

const upVote = async (id, data) =>{
  const response = await axios.put(`${baseUrl}/${id}`, data)
  return response.data
}

export { getAll, addNew, upVote } 