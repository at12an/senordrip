import './App.css';
import { Container, AppBar, Typography, Box, Button } from '@mui/material';
import Navigation from './Navigation';
import Bookings from './Bookings';
import Services from './Services';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function App() {
  return (
    <>
      <Router>
        <Navigation/>
        <Routes>
          <Route>
            <Route path='/' element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/bookings' element={<Bookings/>}/>
            <Route path='/services' element={<Services/>}/>
          </Route>
        </Routes>
      </Router>
      {/* <Container sx={{
        height: '200vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
      }}>
        <Box 
          justifyContent='center'
          sx={{
            height: '75vh',
            width: '95vw',
            bgcolor: '#192A56',
            alignItems: 'center',
            display: 'flex',
            textAlign: 'center'
          }}>
          <Box 
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              height: '33%',
              justifyContent: 'space-around'
            }}
          >
            <Typography 
              variant='h2' 
              sx={{
                fontFamily: 'Roboto', 
                color: "white", 
                fontWeight: 500, 
                letterSpacing: '0.2rem', 
                textAlign: 'center'
                }}>
                  SENOR DRIP
            </Typography>
            <Typography 
              variant='p' 
              sx={{
                fontFamily: 'Roboto', 
                color: "white", 
                fontWeight: 300, 
                textAlign: 'center',
                mb: '10px'
                }}>
                  Experience premium hair services & discover our best-selling products
            </Typography>
            <Button 
              variant='contained'
              sx={{
                width: '200px',
                borderRadius: '20px',
                color: 'black',
                bgcolor: '#F1F0EF'
              }}>
                BOOK NOW
            </Button>
          </Box>
        </Box>
        <Box
          sx={{
            height: '25vh'
          }}
        ></Box>
        <Box
          sx={{
            height: '50vh',
            width: '95vw',
            bgcolor: '#192A56'
          }}
        ></Box>
      </Container> */}
    </>
  );
}

export default App;
