import './App.css';
import { Container, AppBar, Typography, Box, Button, ImageList } from '@mui/material';
import '@fontsource/roboto';
import banner from './banner3.png'; 
import logo from './logo5.png';
import StandardImageList from './ImageList';


function Home() {
  return (
    <>
        <Container sx={{
            height: '200vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
        <Box 
          justifyContent='center'
          sx={{
            height: '75vh',
            width: '100vw',
            bgcolor: '#192A56',
            backgroundImage: `url(${banner})`,
            alignItems: 'center',
            display: 'flex',
            textAlign: 'center'
        }}>
          <Box 
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              height: '50%',
              justifyContent: 'space-around'
            }}>
            {/* <Typography 
              variant='h2' 
              sx={{
                fontFamily: 'Roboto', 
                color: "white", 
                fontWeight: 500, 
                letterSpacing: '0.2rem', 
                textAlign: 'center'
                }}>
                  SENOR DRIP
            </Typography> */}
            <img 
                src={logo} 
                style={{
                    height: '300px',
                    marginBottom: '20px',
                    // position: 'fixed'
                }}>
            </img>

            {/* <Typography 
              variant='p' 
              sx={{
                fontFamily: 'Roboto', 
                color: "black   ", 
                fontWeight: 500, 
                textAlign: 'center',
                mb: '10px'
                }}>
                  Explore top-tier hair services & unlock your tailored hair transformation
            </Typography> */}

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
              }}> 
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
            // flexDirection: 'column'
          }}
        >
            <Box sx={{mr:'50px'}}>
                <Typography variant='h1'>
                DISCOVER SENOR DRIP
                </Typography>
            </Box>
            <Box>
                <Typography>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.           
                </Typography>
                <Typography sx={{mt:'30px'}}>
                    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                </Typography>

            </Box>
        </Box>
        <Box
          sx={{
            height: '50vh',
            width: '100vw',
            bgcolor: 'black'
          }}
        >
            <StandardImageList></StandardImageList>
        </Box>
      </Container>
    </>
  );
}

export default Home;
