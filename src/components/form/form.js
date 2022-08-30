import React, { useEffect, useState } from 'react'
import FileBase64 from 'react-file-base64'
import { useDispatch, useSelector } from 'react-redux'

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

  const dispatch = useDispatch()

  useEffect(() => {
    if (Object.entries(currentId).length !== 0) {
      setPostData(currentId)
    }
  }, [currentId])

  const clear = () => {
    setPostData({
      creator: '',
      title: '',
      message: '',
      tags: '',
      selectedFile: '',
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
  }
  return (
    <Container maxWidth='sm'>
      <Grid
        container
        spacing={2}
        direction='column'
        justifyContent='center'
        style={{ minHeight: '100vh' }}
      >
        <Paper elelvation={2} sx={{ padding: 5 }}>
          <form onSubmit={handleSubmit}>
            <Grid container direction='column' spacing={2}>
              <Grid item>
                <Typography align='center' fontSize='16px' fontWeight='bold'>
                  Create a memory
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
                    setPostData({ ...postData, tags: e.target.value })
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
                    Create
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
