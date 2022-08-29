import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import postService from './PostService'

const initialState = {
    posts: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
}

export const getAllPosts = createAsyncThunk('users/fetchAll', async () => {
    return await postService.getPosts()
})

export const PostSlice = createSlice({
    name: "post",
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
                state.posts = (action.payload)
            })
            .addCase(getAllPosts.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    },
})

export const { reset } = PostSlice.actions
export default PostSlice.reducer
