import React, { useEffect,useState } from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import './SPost.css';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
export default function SPost() {
  const location=useLocation()
const path=location.pathname.split("/")[2];
console.log(path);
const[post,setPost]=useState({})
useEffect(()=>{
  const getPost=async()=>{
    const res=await axios.get("/posts/"+path);
    //console.log(res);
    setPost(res.data);
  }
  getPost()
},[path]);
  return (
      <div className='spost'>
    
        <Card sx={{maxWidth:570, margin:'1%'}}>
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
        height="194"
        image={post.image}
        alt="Paella dish"
      />
      <CardContent>
      <IconButton aria-label="add to favorites">
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label="add to favorites">
          <EditIcon />
        </IconButton>
      <CardActions disableSpacing>
                       </CardActions>
                       <Typography variant="body1" color="text.secondary">
                       {post.title}
        </Typography>
     
        <Typography variant="body2" color="text.secondary">
        {post.desc}
        </Typography>
      </CardContent>
   
    
    </Card>
                  </div>
   
  )
}

  