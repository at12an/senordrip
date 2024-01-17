import './App.css';
import { Container, Typography, Box, Button } from '@mui/material';
import service1 from './images/services/services1.jpg';
import service2 from './images/services/services2.jpg';
import Footer from './Footer';


function Services() {
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
            src={service1} 
            alt='service1'
            style={{
              width:'30vw'  
            }}
          ></img>
          <img
            className='services-img'
            src={service2} 
            alt='service2'
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

export default Services;
