import './App.css';
import { Container, Typography, Box } from '@mui/material';
import Footer from './Footer';
import banner from './images/banners/banner5.jpg';
import { useNavigate } from 'react-router-dom';



function Contacts() {
    const navigate = useNavigate();

    const move = () => {
       window.location.href = 'https://calendar.app.google/bio8GXyockVMtT3F8';
    }

    return (
    <>
      <Container 
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box
            id='contacts-section1'
            sx={{ 
                width:'100vw',
                bgcolor: '#192A56',
                alignItems: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center', 
                height: '45vh'
            }}
        >
            <Box
                id='contacts-h1-box'
                sx={{
                    bgcolor: '#192A56',
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center', 
                    height: '15vh',
                    borderBottom: '2px solid #858DA3',
                    width: '60%'
                }}
            >
                <Typography
                    id='contacts-h1'
                    variant='h3'
                    sx={{
                        color: '#F1F0EF',
                        textAlign: 'center',
                        fontWeight: '700',
                        letterSpacing: '0.1rem'
                    }}
                >
                    CONTACT US
                </Typography>
            </Box>
            <Box
                sx={{
                    bgcolor: '#192A56',
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center', 
                    height: '10vh',
                    width: '70%',
                    mt: '10px'
                }}
            >
                <Typography
                    sx={{
                        color: '#F1F0EF',
                        textAlign: 'center',
                        fontWeight: 300
                    }}
                >
                    Need help? Reach out to Senor Drip!
                </Typography>
                <Typography
                    sx={{
                        color: '#F1F0EF',
                        textAlign: 'center',
                        fontWeight: 300
                    }}
                >
                    Bookings, <span onClick={move} style={{textDecoration: 'underline'}} id='contacts-bookings'>available here</span>
                </Typography>
            </Box>
        </Box>

        <Box
            id='contacts-section2'
            sx={{ 
                width:'100vw',
                bgcolor: '#F1F0EF',
                alignItems: 'center',       
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-evenly', 
                py: '8vh'
            }}
        >
            <Box
                id='contacts-img-box'
                sx={{
                    alignItems: 'center',       
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center', 
                }}
            >
                <img
                    src={banner} 
                    id='contacts-img'
                    alt='logo'
                    style={{
                        height: '35vh'
                    }}
                ></img>
            </Box>

            <Box
                sx={{ 
                    textAlign: 'center',
                    alignItems: 'center',
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    px: '30px'
                }}
            >
                <Box>
                    <Typography
                        variant='h6'
                        sx={{
                            color: 'black'
                        }}
                    >
                        REACH OUT
                    </Typography>
                    <Typography
                        sx={{
                            color: 'darkslategray',
                            mt: '15px',
                            fontWeight: '500',
                            letterSpacing: '0.05rem'
                        }}
                    >
                        For general information / inquiries & customer service
                    </Typography>
                    <Typography
                        sx={{
                            color: 'lightslategray',
                            mt: '10px',
                            fontSize: '15px',
                            fontFamily: 'Roboto',
                            letterSpacing: '0.05rem'
                        }}
                    >
                        EMAIL: <a href='mailto:barbersenordrip@outlook.com'>barbersenordrip@outlook.com</a>
                    </Typography>
                    <Typography
                        sx={{
                            color: 'lightslategray',
                            mt: '10px',
                            fontSize: '15px',
                            fontFamily: 'Roboto',
                            letterSpacing: '0.05rem'
                        }}
                    >
                        DM: <a href='mailto:barbersenordrip@outlook.com'>instagram.com/senordrip</a>
                    </Typography>
                    <Typography
                        variant='h6'
                        sx={{
                            mt: '30px',
                            color: 'black'
                        }}
                    >
                        LOCATION
                    </Typography>
                    <Typography
                        sx={{
                            color: 'darkslategray',
                            mt: '10px',
                            fontWeight: '500',
                            letterSpacing: '0.05rem'
                        }}
                    >
                        Senor Drip is an private barbershop with an undisclosed location.
                    </Typography>
                    <Typography
                        sx={{
                            color: 'lightslategray',
                            mt: '10px',
                            fontSize: '15px',
                            fontFamily: 'Roboto',
                            letterSpacing: '0.05rem'
                        }}
                    >
                        Location: Peakhurst 2210, NSW 
                    </Typography>
                </Box>
            </Box>
        </Box>
        <Footer></Footer>
      </Container>
    </>
  );
}

export default Contacts;
