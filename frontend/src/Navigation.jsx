import * as React from 'react';
import { AppBar, Box, Toolbar, Typography, Container, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import logo from './images/logos/logo1-bg.jpg';
import '@fontsource/roboto';

const pages = ['Home', 'Services', 'Bookings', 'Contacts'];

function Navigation() {

  const navigate = useNavigate();

  const move = () => {
    navigate('/bookings');
  }
 
  return (
    <AppBar position="static" sx={{bgcolor:'#F1F0EF', color:'black', width: '100%', p:1}}>
      <Container maxWidth="xl"> 
        <Toolbar id='toolbar' disableGutters sx={{alignItems:'center', alignContent:'center'}}>
          <img 
            id='nav-logo'
            src={logo} 
            alt='logo'
            style={{
              height: '100px',
              marginLeft: '175px',
              marginRight: '10px  '
            }}
          >
          </img>
          
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                disableRipple
                key={page}
                sx={{ 
                  my: 2, 
                  display: 'block', 
                  color: 'black',
                  mx: 1.5,
                  transition: '0.5s',
                  '&:hover': {
                    textDecoration: 'underline',
                    backgroundColor: 'transparent'
                  }
                }}
              >
                <Link 
                  className='nav-link'
                  to={`/${page}`} 
                  style={{
                    textDecoration: 'none',
                    color: 'grey',
                    paddingBottom: '10px',
                    fontFamily: 'Roboto',
                    fontWeight: 300,
                    letterSpacing: '.1rem',
                    textTransform: 'none',
                    fontSize: '0.8rem',
                  }}
                >
                  {page}
                </Link>
              </Button>
            ))}
          </Box>

          <Box 
            onClick={move}
            id='nav-book-button'
            sx={{ 
              flexGrow: 0,
              border: '1px solid #000000',
              mr: '150px',
              transition: '0.75s',
              '&:hover': {
                backgroundColor: 'black',
                color: 'white'
              }
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