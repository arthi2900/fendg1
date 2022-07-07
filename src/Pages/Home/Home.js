import React, { useEffect,useState } from 'react';
import Header from '../../components/Header/Header'
import Posts from '../../components/Posts/Posts';
import './Home.css';
import axios from "axios";
export default function Home() {
  const [posts,setPosts]=useState([]);
  useEffect(()=>{
    const fetchPosts=async()=>{
     const res=await axios.get('/posts')
     console.log(res.data)
     setPosts(res.data)
    }
    fetchPosts()
  },[])
  return (
    <div>
            <Header />
 <div className='home'>
 <Posts posts={posts}/>
          
        </div>
    </div>
  )
}
// <Posts posts={posts}/>