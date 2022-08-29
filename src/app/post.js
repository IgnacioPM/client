import { configureStore } from '@reduxjs/toolkit'
import postReducer from '../features/posts/PostSlice'
import currentIdReducer from '../features/posts/CurrentIdSlice'

export const store = configureStore({
  reducer: {
    posts: postReducer,
    currentId: currentIdReducer,
  },
})
