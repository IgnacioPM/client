import React from 'react'

import Posts from './components/posts/posts'
import Form from './components/form/form'
import { AppBar, Container, Grid, Grow, Typography } from '@mui/material'
import Logo from './components/images/logo.jpg'

const App = () => {
  return (
    <Container>
      <AppBar position='static' color='inherit'>
        <Typography variant='h2' align='center'>
          Memories
        </Typography>
        <div align='center'>
          <img align='center' src={Logo} alt='icon' height='80' width='80' />
        </div>
      </AppBar>
      <Grow in>
        <Grid container spacing={2} padding={4}>
          <Grid item xs={12} md={8} sm={12}>
            <Posts />
          </Grid>
          <Grid item xs={12} md={4} sm={12}>
            <Form />
          </Grid>
        </Grid>
      </Grow>
    </Container>
  )
}

export default App
