import React, { useEffect } from 'react'
import { Grid, CircularProgress } from '@mui/material'
import { getAllPosts, reset } from '../../features/posts/PostSlice'
import { useDispatch, useSelector } from 'react-redux'

import Post from './post/Post'

const Posts = () => {
  const dispatch = useDispatch()

  const { posts, isError, message } = useSelector((state) => state.posts)

  useEffect(() => {
    if (isError) {
      console.log(message)
    }

    dispatch(getAllPosts(), reset())
  }, [isError, message, dispatch])

  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid container marginTop={7} sx={{ flexGrow: 1 }}>
      {posts.map((post) => (
        <Grid item key={post._id} xs={12} sm={6} md={6} marginTop={2}>
          <Post post={post} />
        </Grid>
      ))}
    </Grid>
  )
}

export default Posts
