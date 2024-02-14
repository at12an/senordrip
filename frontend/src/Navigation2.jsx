import * as React from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, Menu, MenuItem, Button, Container } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, useNavigate } from 'react-router-dom';
import logo from './images/logos/logo1-bg.jpg';


const pages = ['Home', 'Services', 'Bookings', 'Contacts'];

function Navigation() {
    const navigate = useNavigate();

  const moveToBookings = () => {
    navigate('/Bookings');
  }

  const moveToHome = () => {
    navigate('/Home');
  }
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={{bgcolor:'#F1F0EF', color:'black', width: '100%', p:1}}>
      <Container maxWidth="xl">
        <Toolbar sx={{
          justifyContent: 'space-between'
        }} disableGutters>
        <img 
            onClick={moveToHome}
            id='nav-logo'
            src={logo} 
            alt='logo'
            style={{
              height: '100px',
              marginLeft: '175px',
              marginRight: '10px',
              '&:hover': {
                cursor: 'pointer'
              }
            }}
        ></img>
        <img 
            id='nav-logo2'
            src={logo} 
            alt='logo'
            style={{
              height: '100px',
              marginLeft: '175px',
              marginRight: '10px',
              display: 'none'
            }}
        ></img>

          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
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
                </MenuItem>
              ))}
            </Menu>
          </Box>
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
            onClick={moveToBookings}
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