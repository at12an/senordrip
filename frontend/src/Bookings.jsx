import './App.css';
import { Container, Typography, Box, Button } from '@mui/material';
import bookings from './images/services/bookings.jpg';
import Footer from './Footer';
import { useEffect } from 'react';



function Bookings() {

  return (
    <>
      <Container 
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        <Box
          id='services-box'
          sx={{ 
            width:'65vw',
            bgcolor: '#192A56',
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <img
            className='services-img'
            src={bookings} 
            alt='bookings'
            style={{
              width:'30vw'  
            }}
          ></img>
        </Box>
        <Footer></Footer>
      </Container>
    </>
  );
}

export default Bookings;
