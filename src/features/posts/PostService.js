import axios from 'axios'

const API_URL = '/posts'

const getPosts = async () => {
    const response = await axios.get(API_URL)

    return response.data
}

const postService = {
    getPosts,
}

export default postService