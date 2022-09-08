import React, { useEffect, useState } from 'react'
import FileBase64 from 'react-file-base64'
import { useDispatch, useSelector } from 'react-redux'
import {
  createNewPost,
  getAllPosts,
  updatePost,
} from '../../features/posts/PostSlice'
import { resetCurrentId } from '../../features/posts/CurrentIdSlice'

import {
  Container,
  Button,
  Grid,
  Paper,
  TextField,
  Typography,
} from '@mui/material'
import { Stack } from '@mui/system'

export const Form = () => {
  const [postData, setPostData] = useState({
    creator: '',
    title: '',
    message: '',
    tags: '',
    selectedFile: '',
  })
  const { currentId } = useSelector((state) => state.currentId)
  let lengthCrurrentId = Object.entries(currentId).length

  const dispatch = useDispatch()

  useEffect(() => {
    if (Object.entries(currentId).length !== 0) {
      setPostData(currentId)
    }
  }, [currentId])

  useEffect(() => {
    dispatch(getAllPosts())
  }, [dispatch])

  const clear = () => {
    setPostData({
      creator: '',
      title: '',
      message: '',
      tags: '',
      selectedFile: '',
    })
    dispatch(resetCurrentId())
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (Object.entries(currentId).length !== 0) {
      dispatch(updatePost(postData), clear())
    } else {
      dispatch(createNewPost(postData), clear())
    }
  }
  return (
    <Container maxWidth='sm' position='fixed'>
      <Grid
        container
        direction='column'
        justifyContent='center'
        style={{ minHeight: '100vh' }}
      >
        <Paper elevation={2} sx={{ padding: 5 }}>
          <form onSubmit={handleSubmit}>
            <Grid container direction='column' spacing={2}>
              <Grid item>
                <Typography align='center' fontSize='16px' fontWeight='bold'>
                  {lengthCrurrentId !== 0
                    ? 'Update a memory'
                    : 'Create a memory'}
                </Typography>
              </Grid>
              <Grid item>
                <TextField
                  type='text'
                  fullWidth
                  label='Creator'
                  placeholder='Enter your name'
                  variant='outlined'
                  required
                  value={postData.creator}
                  onChange={(e) =>
                    setPostData({ ...postData, creator: e.target.value })
                  }
                />
              </Grid>
              <Grid item>
                <TextField
                  type='text'
                  fullWidth
                  label='Title'
                  placeholder='Enter your name'
                  variant='outlined'
                  required
                  value={postData.title}
                  onChange={(e) =>
                    setPostData({ ...postData, title: e.target.value })
                  }
                />
              </Grid>
              <Grid item>
                <TextField
                  type='text'
                  fullWidth
                  label='Message'
                  placeholder='Enter your name'
                  variant='outlined'
                  required
                  value={postData.message}
                  onChange={(e) =>
                    setPostData({ ...postData, message: e.target.value })
                  }
                />
              </Grid>
              <Grid item>
                <TextField
                  type='text'
                  fullWidth
                  label='Tags'
                  placeholder='Enter your name'
                  variant='outlined'
                  required
                  value={postData.tags}
                  onChange={(e) =>
                    setPostData({
                      ...postData,
                      tags: e.target.value.split(','),
                    })
                  }
                />
              </Grid>
              <Grid item>
                <FileBase64
                  type='file'
                  multiple={false}
                  onDone={({ base64 }) =>
                    setPostData({ ...postData, selectedFile: base64 })
                  }
                />
              </Grid>
              <Grid item>
                <Stack
                  direction={{ xs: 'column', sm: 'column' }}
                  spacing={{ xs: 1, sm: 2, md: 2 }}
                >
                  <Button
                    xs={6}
                    type='submit'
                    variant='contained'
                    size='medium'
                  >
                    {lengthCrurrentId !== 0 ? 'UPDATE' : 'CREATE'}
                  </Button>
                  <Button
                    xs={6}
                    variant='contained'
                    onClick={clear}
                    size='medium'
                  >
                    Clear
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </form>
        </Paper>
      </Grid>
    </Container>
  )
}

export default Form
