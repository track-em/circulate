
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import { Image } from 'mui-image'
import AccountCircle from '@mui/icons-material/AccountCircle';
import Grid from '@mui/material/Grid';

export default function Navbar() {
  return (
    <Box  sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ bgcolor: "#012A4A" }}>
        <Toolbar variant="dense" >
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={11}> 
            <Image src="clearLogo.png" width={300} sx={{ flexGrow: 1 }}/>
          </Grid>
          <Grid item xs={1}>
              <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    color="inherit"
                  >
                    <AccountCircle />
                  </IconButton>
          </Grid>
        </Grid>     
        </Toolbar>
      </AppBar>
    </Box>
  );
  }

