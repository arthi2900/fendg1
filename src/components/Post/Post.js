import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { red } from '@mui/material/colors';
import './Post.css';
import { Link } from 'react-router-dom';
export default function Post({post}) {
  return (
    <div className='Post'>
 <Card sx={{maxWidth: 340, margin:'1%'}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            R
          </Avatar>
        }
                title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />
     
      <CardMedia
        component="img"
        height="200"
        image= {post.image}
        alt="Paella dish"
      />
       
     
      <CardContent>
      <Link to ={`/post/${post._id}`}><Typography variant="body2" color="text.secondary">
      {post.title}
        </Typography> </Link>
     
        <Typography variant="body2" color="text.secondary">
        {post.desc}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
            
      </CardActions>
    
    </Card>
    
  
    </div>
  )
}
