import './App.css';
import {Box} from '@mui/material';
import insta from './images/icons/instagram.png';
import email from './images/icons/email.png';
// import phone from './images/icons/phone.png';
// import location from './images/icons/location.png';


function Footer() {
    const redirect = () => {
      window.location.href = 'https://www.instagram.com/senordrip/';
    };

    const redirect2 = () => {
      window.location.href = 'mailto:barbersenordrip@outlook.com';
    };

  return (
    <>
    
      <Box
          sx={{
                height:'20vh',
                width: '100vw',
                bgcolor: '#F1F0EF',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)'
            }}
        >
          <Box
            id='footer-icon-box'
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                width: '25%'
            }}
          >
            <img 
                onClick={redirect}
                className='footer-icon'
                
                src={insta} 
                alt='instagram'
                style={{
                    width: '30px'
                }}
            ></img>
            {/* <img 
              className='footer-icon'
              src={phone} 
              alt='phone'
              style={{
                width: '30px'
              }}
            ></img> */}
            {/* <img 
              className='footer-icon'
              src={location} 
              alt='location'
              style={{
                width: '30px'
              }}
            ></img> */}
            <img 
              onClick={redirect2}
              className='footer-icon'
              src={email} 
              alt='email'
              style={{
                width: '30px'
              }}
            ></img>
          </Box>
        </Box>
    </>
  );
}

export default Footer;
