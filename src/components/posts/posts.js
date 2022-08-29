import React, { useEffect } from 'react'
import { Grid, CircularProgress, Box } from '@mui/material'
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
    <Box sx={{ flexGrow: 1 }}>
      <Grid container>
        {posts.map((post) => (
          <Grid item key={post._id} xs={12} sm={4} md={4}>
            <Post post={post} />
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default Posts
