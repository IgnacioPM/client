import axios from 'axios';

const url = '/posts';

export const fecthPosts = () => axios.get(url);

export const createPost = (newPost) => axios.post(url, newPost);