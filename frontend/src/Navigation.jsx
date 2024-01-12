import * as React from 'react';
import { AppBar, Box, Toolbar, Typography, Container, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import logo from './images/logo3.jpg';
import '@fontsource/roboto';

const pages = ['Home', 'Services', 'Bookings', 'Contact'];

function Navigation() {

  return (
    <AppBar position="static" sx={{bgcolor:'#F1F0EF', color:'black', width: '100%', p:1}}>
      <Container maxWidth="xl"> 
        <Toolbar disableGutters sx={{alignItems:'center', alignContent:'center'}}>
          <img 
            src={logo} 
            alt='logo'
            style={{
              height: '100px',
              marginLeft: '175px'
            }}
          >
          </img>
          
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                sx={{ 
                  my: 2, 
                  display: 'block', 
                  color: 'black',
                  mx: 1.5,
                  '&:hover': {
                    textDecoration: 'underline',
                  }
                }}
              >
                <Link 
                  to={`/${page}`} 
                  style={{
                    textDecoration: 'none',
                    color: 'black',
                    paddingBottom: '10px',
                    fontFamily: 'Roboto',
                    fontWeight: 300,
                    letterSpacing: '.1rem',
                    textTransform: 'none',
                    fontSize: '0.8rem'
                  }}
                >
                  {page}
                </Link>
              </Button>
            ))}
          </Box>

          <Box 
            sx={{ 
              flexGrow: 0,
              border: '2px solid #000000',
              mr: '100px'
            }}
          >
            <Typography
              sx={{
                px: 2,
                py: 1,
                fontWeight: 300,
                fontFamily: 'Roboto',
                fontSize: '0.8rem'
              }}
            >
              Book Now
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navigation;