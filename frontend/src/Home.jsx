import './App.css';
import { Container, Typography, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '@fontsource/roboto';
import banner from './images/banners/banner3.png'; 
import logo from './images/logos/logo3.png';
import cut1 from './images/cuts/cut1.jpg';
import cut2 from './images/cuts/cut2.jpg';
import cut3 from './images/cuts/cut3.jpg';
import cut4 from './images/cuts/cut4.jpg';
import cut5 from './images/cuts/cut5.jpg';
import cut6 from './images/cuts/cut6.jpg';
import Footer from './Footer';


function Home() {

  const navigate = useNavigate();

  const move = () => {
    navigate('/bookings');
  }

  return (  
    <>
      <Container sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
        }}
      >
        <Box 
          justifyContent='center'
          sx={{
            height: '70vh',
            width: '100vw',
            bgcolor: '#192A56',
            backgroundImage: `url(${banner})`,
            alignItems: 'center',
            display: 'flex',
            textAlign: 'center'
          }}
        >
          <Box 
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              height: '50%',
              justifyContent: 'space-around'
            }}
          >

            <img
                id='home-banner'
                src={logo} 
                alt='logo'
                style={{
                    height: '250px',
                    marginBottom: '30px'
                }}
            ></img>

            <Button 
              onClick={move}
              variant='contained'
              sx={{
                width: '200px',
                borderRadius: '20px',
                color: 'black',
                bgcolor: '#F1F0EF',
                boxShadow: 'none',
                transition: '0.75s',
                fontWeight: 500,
                letterSpacing: '0.1rem',
                fontFamily: 'Roboto',
                '&:hover': {
                    bgcolor: 'black',
                    color: 'white',
                    boxShadow: 'none'
                  }
              }}
            > 
              Book Now
            </Button>
          </Box>
        </Box>


        <Box
          id='home-about-box'
          sx={{
            width: '70vw',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            py: 10
          }}
        >
          <Box
            className='home-about-textbox' 
            sx={{ 
              width: '50%'
            }}
          >
            <Typography 
              id='home-about-h1'
              variant='h1'
              sx={{
                color:'black',
                pr: 2
              }}
            >
              DISCOVER SENOR DRIP
            </Typography>
          </Box>
          <Box 
            className='home-about-textbox' 
            sx={{
              p: 1,
              width: '50%'
            }}
          >
            <Typography 
              sx={{
                mt:'30px',
                color:'black'
              }}
            >
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.           
            </Typography>
            <Typography 
              sx={{
                mt:'30px',
                color:'#192A56'
              }}
            >
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
            </Typography>
          </Box>
        </Box>


        <Box
          sx={{
            width: '100vw',
            bgcolor: '#eae9e7',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            alignItems: 'center'
          }}
        >
          <Box
            className='home-picture-box'
            sx={{
              display: 'flex',
              width: '69vw',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center'
            }}
          >
            <img 
              className='home-picture-img'
              src={cut1} 
              alt='cut1'
              style={{
                width: '23vw'
              }}
            ></img>
            <img 
              className='home-picture-img'
              src={cut2} 
              alt='cut2'
              style={{
                width: '23vw'
              }}
            ></img>
            <img 
              className='home-picture-img'
              src={cut3} 
              alt='cut3'
              style={{
                width: '23vw'
              }}
            ></img>
          </Box>
          <Box
            className='home-picture-box'
            sx={{
              display: 'flex',
              width: '66vw',
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center'
            }}
          >
            <img 
              className='home-picture-img'
              src={cut4} 
              alt='cut4'
              style={{
                width: '23vw'
              }}
            ></img> 
            <img 
              className='home-picture-img'
              src={cut5} 
              alt='cut5'
              style={{
                width: '23vw'
              }}
            ></img>
            <img
              className='home-picture-img'
              src={cut6} 
              alt='cut6'
              style={{
                width: '23vw'
              }}
            ></img>
          </Box>
        </Box>
        

        <Footer></Footer>
      </Container>
    </>
  );
}

export default Home;
