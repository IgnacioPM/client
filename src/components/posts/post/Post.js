import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import MoreIcon from '@mui/icons-material/More'
import moment from 'moment'
import { Box } from '@mui/system'
import { setCurrentId } from '../../../features/posts/CurrentIdSlice'

export const Post = ({ post }) => {
  const { posts } = useSelector((state) => state.posts)
  const dispatch = useDispatch()

  const set_CurrentId = (value) => {
    const selecPost = posts.find((post) => post._id === value)
    dispatch(setCurrentId(selecPost))
  }

  return (
    <Box sx={{ height: 320, transform: 'translateZ(0px)', flexGrow: 1 }}>
      <Grid container marginTop={9}>
        <Grid item xs={11} sm={11} md={11} marginBottom={5}>
          <Card sx={{ maxWidth: 345 }}>
            <div>
              <Button size='small' onClick={() => set_CurrentId(post._id)}>
                <MoreIcon fontSize='default' />
              </Button>
            </div>

            <CardMedia
              component='img'
              height='140'
              image={
                post.selectedFile ||
                'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'
              }
              alt='green iguana'
            />
            <CardContent>
              <Typography gutterBottom variant='h5'>
                {post.creator}
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                {post.message}
              </Typography>
            </CardContent>

            <CardActions>
              <Button size='small' color='primary'>
                <ThumbUpAltIcon fontSize='small' /> Like {post.likeCount}{' '}
              </Button>
              <Button size='small' color='warning'>
                <DeleteForeverIcon fontSize='small' /> Delete
              </Button>
              <Typography ml={6} variant='body2' color='text.secondary'>
                {moment(post.createdAt).fromNow()}
              </Typography>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Post
