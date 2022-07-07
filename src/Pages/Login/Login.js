import React from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import{Link} from 'react-router-dom';
import { useContext, useRef } from "react";
import './Login.css';
import { Context } from '../../context/Context';
import axios from 'axios';
export default function Login() {
  const userRef=useRef();
const passwordRef=useRef();
const {userdata,dispatch,isFetching}=useContext(Context)
  const handleSubmit=async (e)=>{
  e.preventDefault()
  dispatch({type:"LOGIN_START"});
  try{
const res=await axios.post("/aut/login",{
    name:userRef.current.value,
  password:passwordRef.current.value,
})
dispatch({type:"LOGIN_SUCCESS",payload:res.data});
  }
  catch(err){
    dispatch({type:"LOGIN_FAILURE"});
  }
};
console.log(userdata);
  return (
    <div className='login'>  
<form className='loginform' onSubmit={handleSubmit}>
<h1>Login</h1>

<TextField   id="name" label="username"  type="text" required  ref={userRef}/>
<br/>
<TextField  id="password" label="password" type="password" required ref={passwordRef}/>
<br/>
<Button variant="outlined" type="submit"> Login</Button>
</form>
<button className="registerLoginButton">
  <Link className="link" to='/register'>Register</Link></button>
    
       </div>
  )
}

