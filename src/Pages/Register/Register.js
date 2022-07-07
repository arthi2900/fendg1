import React, { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import{Link} from 'react-router-dom';
import './Register.css';
import axios from 'axios';
export default function Register() {
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [error,setError]=useState(false);
  const handleSubmit=async (e)=>{
    e.preventDefault();
    try{
      const res =await axios.post("/aut/register",{
        name,email,password
        });
       // console.log(res)
   res.data && window.location.replace("/login");
      }
   
    catch(err){
setError(true);
    }
   
  };
  return (
    <div className='register'>
   <form className='regform' onSubmit={handleSubmit}>
<h1>Register</h1>
<TextField   id="email" type="text" label="email" onChange={e=>setEmail(e.target.value)} required/>
<br/>
<TextField   id="name" type="text" label="username" onChange={e=>setName(e.target.value)} required/>
<br/>
<TextField  id="password" type="password" label="password" onChange={e=>setPassword(e.target.value)} required/>
<br/>
<Button variant="outlined" type="submit">Register</Button>
</form>
<button className="registerLoginButton">
  <Link className="link" to='/login'>Login</Link></button>
    
    </div>
  )
}
