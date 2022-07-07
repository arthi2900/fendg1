import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { Link } from "react-router-dom";
import './Menu.css';
export function Menu() {
  const userdata=false;
  return (
    
        <div className='topmenu'>
  < BottomNavigation >
 <Link to="/user"> 
<BottomNavigationAction label="Home" icon={<HomeIcon />} /></Link>
<Link to="/user/uprofile"> 
<BottomNavigationAction label="Person" icon={<PersonIcon />} /></Link>
<Link to="/post"><BottomNavigationAction label="AddAPhoto" icon={<AddAPhotoIcon />} /></Link>

{userdata && 
<Link to="/"> <BottomNavigationAction label="Logout" icon={<LogoutIcon />} /></Link>}
<div>
  {
    userdata ?( <img className='topimg' src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"/>)
    :(<div>
      
      <Link to="/register"> Signup</Link>
      <Link to="/login"> Login</Link></div> )
  }
</div>
</ BottomNavigation >
 
       </div>
     
   
  )
}

