import React from 'react'
import Card from '@mui/material/Card';
import TextField from '@mui/material/TextField';
import './CPost.css';
export default function CPost() {
  return (
    <div className='cpost'>
          
          <Card sx={{maxWidth: 440, margin:'5%'}}>
<form>
    
<TextField  fullWidth id="image" label="image" />
<TextField  fullWidth id="title" label="title" />
<TextField  fullWidth id="desc" label="desc" />
  
    <br/>
    <button>publish</button>
</form>
    </Card>
  
    </div>
  )
}
