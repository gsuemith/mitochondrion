import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';

const Hero: React.FC = () => {
  return (
    <Box
      className="full-width-section"
      sx={{
        background: `
          linear-gradient(135deg, 
            #f39c12 0%, 
            #e67e22 25%, 
            #d35400 50%, 
            #a04000 75%, 
            #8b0000 100%
          )
        `,
        color: 'white',
        py: 8,
        textAlign: 'center',
        padding: 0,
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
        position: 'relative',
        zIndex: 3,
        backgroundPosition: '0 0',
        backgroundSize: '100% 100%',
        borderBottomRightRadius: '50% 100px',
        borderBottomLeftRadius: '50% 100px',
        marginBottom: '-50px',
        left: '-30%',
        width: '160%',
        overflow: 'hidden',
      }}
    >
      <Container 
        maxWidth="lg" 
        sx={{ 
          width: '95vw', 
          paddingY: '2em' 
        }}
      >
        <Typography 
          variant="h2" 
          component="h1" 
          gutterBottom
          sx={{ 
            fontWeight: 600,
            color: '#ffffff',
            textAlign: 'center'
          }}
        >
          I am RUNNING in 2026!
        </Typography>
        <Typography 
          variant="h4" 
          component="h2" 
          gutterBottom 
          sx={{ 
            mb: 3,
            fontWeight: 300,
            color: '#2c3e50',
            textAlign: 'center'
          }}
        >
          Running for Safe Streets
        </Typography>
        <Typography 
          variant="h6" 
          sx={{ 
            mb: 4, 
            maxWidth: '800px', 
            mx: 'auto',
            fontWeight: 400,
            color: '#ffffff',
            lineHeight: 1.6,
            textAlign: 'center'
          }}
        >
          Join me in supporting Families for Safe Streets as I train to run the Rome Marathon. 
          Every step honors my mom's memory and helps prevent traffic fatalities through 
          better engineering.
        </Typography>
        <Button 
          variant="contained" 
          size="large" 
          sx={{ 
            bgcolor: 'white', 
            color: '#e67e22',
            px: 4,
            py: 1.5,
            fontSize: '1.1rem',
            fontWeight: 600,
            borderRadius: '25px',
            textTransform: 'none',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)',
            '&:hover': {
              bgcolor: '#f5f5f5',
              boxShadow: '0 6px 25px rgba(0, 0, 0, 0.3)',
              transform: 'translateY(-2px)'
            },
            transition: 'all 0.3s ease'
          }}
        >
          Support My Journey
        </Button>
      </Container>
    </Box>
  );
};

export default Hero;
