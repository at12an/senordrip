import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';
import logo from './logo3.jpg';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const pages = ['Home', 'Services', 'Bookings', 'Contact'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
function Navigation() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null); 
  };

  return (
    <AppBar position="static" sx={{bgcolor:'#F1F0EF', color:'black', width: '100%', p:1}}>
      <Container maxWidth="xl"> 
        <Toolbar disableGutters sx={{alignItems:'center', alignContent:'center'}}>
          {/* <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              ml: 15,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Helvetica',
              fontWeight: 600,
              letterSpacing: '.1rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            SENOR DRIP
          </Typography> */}
          <img 
            src={logo} 
            style={{
              height: '100px',
              marginLeft: '175px'
            }}>

            </img>
          
          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ 
                  my: 2, 
                  display: 'block', 
                  color: 'black',
                  mx: 1.5,
                  '&:hover': {
                    textDecoration: 'underline',
                  }
                }}>
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
                  }}>
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
          }}>
            <Typography
              sx={{
                px: 2,
                py: 1,
                fontWeight: 300,
                fontFamily: 'Roboto',
                fontSize: '0.8rem'
            }}>
              Book Now
            </Typography>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navigation;