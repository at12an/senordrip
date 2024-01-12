import './App.css';
import { Container, Typography, Box, Button } from '@mui/material';
import '@fontsource/roboto';
import banner from './images/banner3.png'; 
import logo from './images/logo5.png';
import cut from './images/cut1.jpg'
// import StandardImageList from './ImageList';


function Home() {
  return (
    <>
      <Container sx={{
        height: '200vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
        }}
      >
        <Box 
          justifyContent='center'
          sx={{
            height: '80vh',
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
                src={logo} 
                alt='logo'
                style={{
                    height: '300px',
                    marginBottom: '20px'
                }}
            ></img>

            <Button 
              variant='contained'
              sx={{
                width: '200px',
                borderRadius: '20px',
                color: 'black',
                bgcolor: '#F1F0EF',
                boxShadow: 'none',
                transition: 'width 0.25s, height 0.25s',
                fontWeight: 500,
                letterSpacing: '0.1rem',
                fontFamily: 'Roboto',
                '&:hover': {
                    backgroundColor: '#F1F0EF',
                    width: '203px',
                    boxShadow: 'none'
                  }
              }}
            > 
              Book Now
            </Button>
          </Box>
        </Box>


        <Box
          sx={{
            height: '75vh',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
        >
          <Box sx={{mr:'50px'}}>
              <Typography 
                variant='h1'
                sx={{
                  color:'#192A56'
                }}
              >
              DISCOVER SENOR DRIP
              </Typography>
          </Box>
          <Box>
            <Typography 
              sx={{
                mt:'30px',
                color:'#192A56'
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
            height: '70vh',
            width: '100vw',
            bgcolor: '#192A56',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly'
          }}
        >
          {/* <StandardImageList></StandardImageList> */}
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-evenly'
            }}
          >
            <img 
              src={cut} 
              alt='cut'
              style={{
                  height: '35vh'
              }}
            ></img>
            <img 
              src={cut} 
              alt='cut'
              style={{
                height: '35vh'
              }}
            ></img>
            <img 
              src={cut} 
              alt='cut'
              style={{
                height: '35vh'
              }}
            ></img>
          </Box>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-evenly'
            }}
          >
            <img 
              src={cut} 
              alt='cut'
              style={{
                height: '35vh'
              }}
            ></img>
            <img 
              src={cut} 
              alt='cut'
              style={{
                height: '35vh'
              }}
            ></img>
            <img 
              src={cut} 
              alt='cut'
              style={{
                height: '35vh'
              }}
            ></img>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default Home;
