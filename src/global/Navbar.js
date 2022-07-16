import { Typography } from '@mui/material'
import React from 'react'
import './styles.css'
import TextField from '@mui/material/TextField';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Navbar(){
    return(
        <div className='top-background'>
            <span className='grid-1'>
                <Typography variant="h4">Holy Cross School</Typography>
            </span>
            <span className='grid-2'>
            <TextField id="search input" label="Search for the keyword" fullWidth variant="outlined"  sx={{minWidth:"400px",marginTop:"30px",borderRadius:"5px",background:"white"}}/>
           
            </span>
        <span className='grid-3'> <AccountCircleIcon fontSize='large'/></span>
        </div>
    )
}

export default Navbar