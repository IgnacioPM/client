import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import postService from './PostService'

const initialState = {
  posts: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

export const getAllPosts = createAsyncThunk('posts/fetchAll', async () => {
  return await postService.getPosts()
})

export const createNewPost = createAsyncThunk(
  'posts/createPost',
  async (post) => {
    try {
      return await postService.createPost(post)
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString()
      return post.rejectWithValue(message)
    }
  }
)

export const updatePost = createAsyncThunk('posts/update', async (postData) => {
  try {
    return await postService.updatePostService(postData)
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString()
    return postData.rejectWithValue(message)
  }
})

export const deletePostById = createAsyncThunk('posts/delete', async (id) => {
  try {
    return await postService.deletePostService(id)
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString()
    return id.rejectWithValue(message)
  }
})

export const likeCountPost = createAsyncThunk('posts/likeCount', async (id) => {
  try {
    return await postService.likeCountService(id)
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.data.message) ||
      error.message ||
      error.toString()
    return id.rejectWithValue(message)
  }
})

export const PostSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllPosts.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getAllPosts.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.posts = action.payload
      })
      .addCase(getAllPosts.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(createNewPost.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createNewPost.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.posts.push(action.payload)
      })
      .addCase(createNewPost.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(updatePost.pending, (state) => {
        state.isLoading = true
      })
      .addCase(updatePost.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.posts = state.posts.filter(
          (post) => post._id !== action.payload._id
        )
        state.posts.unshift(action.payload)
      })
      .addCase(updatePost.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(deletePostById.pending, (state) => {
        state.isLoading = true
      })
      .addCase(deletePostById.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.posts = state.posts.filter(
          (post) => post._id !== action.payload.id
        )
      })
      .addCase(deletePostById.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
      .addCase(likeCountPost.pending, (state) => {
        state.isLoading = true
      })
      .addCase(likeCountPost.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.posts = state.posts.filter(
          (post) => post._id !== action.payload._id
        )
        state.posts.unshift(action.payload)
      })
      .addCase(likeCountPost.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = PostSlice.actions
export default PostSlice.reducer
