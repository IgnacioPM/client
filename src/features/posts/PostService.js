import axios from 'axios'

const API_URL = 'http://localhost:5000/posts/'

const getPosts = async () => {
  const response = await axios.get(API_URL)

  return response.data
}

const createPost = async (postData) => {
  const response = await axios.post(API_URL, postData)

  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

const updatePostService = async (postData /* , token */) => {
  /*   const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  } */

  const response = await axios.put(API_URL, postData /* , config */)

  return response.data
}

const deletePostService = async (postData) => {
  const response = await axios.delete(API_URL + postData /* , config */)

  return response.data
}

const likeCountService = async (id) => {
  const response = await axios.put(API_URL + id /* , config */)

  return response.data
}

const postService = {
  getPosts,
  createPost,
  updatePostService,
  deletePostService,
  likeCountService,
}

export default postService
