import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Collapse,
  Avatar,
  IconButton,
  Typography,
  Grid,
  styled,
} from '@mui/material'
import { red } from '@mui/material/colors'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShareIcon from '@mui/icons-material/Share'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import moment from 'moment'

import { setCurrentId } from '../../../features/posts/CurrentIdSlice'
import {
  deletePostById,
  likeCountPost,
} from '../../../features/posts/PostSlice'

const ExpandMore = styled((props) => {
  const { expand, ...other } = props
  return <IconButton {...other} />
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}))

export const Post = ({ post }) => {
  const { posts } = useSelector((state) => state.posts)
  const dispatch = useDispatch()

  const set_CurrentId = (value) => {
    const selecPost = posts.find((post) => post._id === value)
    dispatch(setCurrentId(selecPost))
  }
  const [expanded, setExpanded] = useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Grid container>
      <Grid item xs={11} sm={11} md={11} marginBottom={2}>
        <Card sx={{ maxWidth: 360, maxHeight: 420 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
                R
              </Avatar>
            }
            action={
              <IconButton
                aria-label='settings'
                onClick={() => set_CurrentId(post._id)}
              >
                <MoreVertIcon />
              </IconButton>
            }
            title={post.creator}
            subheader={moment(post.createdAt).fromNow()}
          />
          <CardMedia
            component='img'
            height='194'
            image={
              post.selectedFile ||
              'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'
            }
            alt='Post image'
          />
          <CardContent>
            <Typography variant='body2' color='text.secondary'marginBottom={1} alignContent="center">
              {post.tags.map((tag) => `#${tag} `)}
            </Typography>
            <Typography variant='body2' color='text.primary'>
              {post.title}
            </Typography>
            <Typography variant='body2' color='text.secondary'>
              {post.message}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton
              aria-label='add to favorites'
              onClick={() => dispatch(likeCountPost(post._id))}
            >
              {post.likeCount} <FavoriteIcon />
            </IconButton>
            <IconButton aria-label='share'>
              <ShareIcon />
            </IconButton>
            <IconButton
              aria-label='delete'
              onClick={() => dispatch(deletePostById(post._id))}
            >
              <DeleteForeverIcon />
            </IconButton>
            <ExpandMore
              expand={expanded}
              onClick={handleExpandClick}
              aria-expanded={expanded}
              aria-label='show more'
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </CardActions>
          <Collapse in={expanded} timeout='auto' unmountOnExit>
            <CardContent>
              <Typography paragraph>Method:</Typography>
              <Typography paragraph>
                Heat 1/2 cup of the broth in a pot until simmering, add saffron
                and set aside for 10 minutes.
              </Typography>
              <Typography paragraph>
                Heat oil in a (14- to 16-inch) paella pan or a large, deep
                skillet over medium-high heat. Add chicken, shrimp and chorizo,
                and cook, stirring occasionally until lightly browned, 6 to 8
                minutes. Transfer shrimp to a large plate and set aside, leaving
                chicken and chorizo in the pan. Add pimentón, bay leaves,
                garlic, tomatoes, onion, salt and pepper, and cook, stirring
                often until thickened and fragrant, about 10 minutes. Add
                saffron broth and remaining 4 1/2 cups chicken broth; bring to a
                boil.
              </Typography>
              <Typography paragraph>
                Add rice and stir very gently to distribute. Top with artichokes
                and peppers, and cook without stirring, until most of the liquid
                is absorbed, 15 to 18 minutes. Reduce heat to medium-low, add
                reserved shrimp and mussels, tucking them down into the rice,
                and cook again without stirring, until mussels have opened and
                rice is just tender, 5 to 7 minutes more. (Discard any mussels
                that don&apos;t open.)
              </Typography>
              <Typography>
                Set aside off of the heat to let rest for 10 minutes, and then
                serve.
              </Typography>
            </CardContent>
          </Collapse>
        </Card>
      </Grid>
    </Grid>
  )
}

export default Post
