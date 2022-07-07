import React from 'react'
import Card from '@mui/material/Card';
import AddBoxIcon from '@mui/icons-material/AddBox';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';
import './UProfile.css';
export default function UProfile() {
  return (
    <div className='uprofile'>
          <Card sx={{maxWidth: 440, margin:'5%'}}>
    <form>
    <div className='uprofileimage'>
        <img src="" alt/>

    <TextField type="file" fullWidth id="image" label="image" >
      <IconButton aria-label="add to favorites">
          <AddBoxIcon />
        </IconButton> </TextField>
    </div>
   
    <TextField  fullWidth id="username" label="username" />
    <TextField  fullWidth id="userdesc" label="userdesc" />
      
        <br/>
        <button>publish</button>
    </form>
        </Card>
         </div>
  )
}
