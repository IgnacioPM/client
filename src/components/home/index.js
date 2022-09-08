import { Grid, Grow } from '@mui/material'

import Form from '../form/form'
import Posts from '../posts/posts'

function Home() {
  return (
    <Grow in marginTop={2}>
      <Grid container display='flex'>
        <Grid item xs={12} md={8} sm={12}>
          <Posts />
        </Grid>
        <Grid item xs={12} md={4} sm={12}>
          <Form />
        </Grid>
      </Grid>
    </Grow>
  )
}

export default Home
