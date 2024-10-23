
import React, { useState } from 'react';
import {Grid, Typography, createTheme,ThemeProvider,Stack,Box,Button } from '@mui/material'
import SideBar from './Components/SIdeBar';
import ReactDOM from 'react-dom/client';
import { Outlet } from 'react-router-dom';

function App() {
  

  const theme  = createTheme({
    palette:{
      primary:{

        main:"#9785BA",
        light:"#AF9FCD",
        contrastText:"#fff"
      },
      secondary:{
        main:"#D7C7F4",
        light :"#fff"
        , contrastText:"#fff"
      }

    }
    ,typography:{
      fontFamily:"ubuntu,open-sans" ,
    }

  }  );

  const [chat, setChat ]= useState([]);
  const [menuOpen, setMenuOpen ]= useState(false);
  


  return (
    <ThemeProvider theme={theme}>

      
    <div className="App">
      <Grid sx={{display:"flex" ,justifyContent:"center"}} container spacing={5}>
        
       
      <Grid    sx={{
            
              '@media (max-width:800px)': {
                width: '70%',
                transform: menuOpen ? 'translateX(0)' : 'translateX(-100%)',
                transition: 'transform 400ms ease',
              },
            }} position={{ xs: 'fixed', md: 'relative' }}
            height={'100vh'}
            zIndex={{ xs: 9999, md: 1 }}
            boxShadow={{ xs: menuOpen ? 10 : 0, md: 0 }}item xs={0} md={3}>

       <SideBar  setChat={setChat} closeMenu={() => setMenuOpen(false)} />
      </Grid>



      <Grid bgcolor="secondary.main" item xs={12} md={9}> 
       <Outlet  context={{chat:chat , setChat:setChat }}/>
       </Grid>
        
      </Grid>
   
    

    </div>

    </ThemeProvider>
    
  );
}

export default App;
