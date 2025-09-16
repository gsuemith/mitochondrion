import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';

const CallToAction: React.FC = () => {
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
        textAlign: 'center',
        padding: '64px 0',
        boxShadow: '0 -8px 32px rgba(0, 0, 0, 0.3)',
        position: 'relative',
        zIndex: 3,
        backgroundPosition: '0 0',
        backgroundSize: '100% 100%',
        borderTopRightRadius: '50% 100px',
        borderTopLeftRadius: '50% 100px',
        left: '-30%',
        top: '-67px',
        width: '160%',
        marginBottom: '-200px',
        overflow: 'hidden',
      }}
    >
      <Container 
        maxWidth="lg" 
        sx={{ 
          padding: '0 24px', 
          width: '95vw' 
        }}
      >
        <Grid container spacing={4} alignItems="center">
          <Grid size={{ xs: 12, md: 8 }}>
            <Typography variant="h3" component="h2" gutterBottom>
              Join Me in Making Streets Safer
            </Typography>
            <Typography 
              variant="h6" 
              paragraph 
              sx={{ mb: 4 }}
            >
              Your support helps Families for Safe Streets continue their vital work in traffic 
              safety advocacy, policy change, and community education. Every donation brings us 
              closer to zero traffic fatalities.
            </Typography>
            <Typography variant="body1" paragraph>
              Your donation goes directly to Families for Safe Streets to fund their vital work.
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Box 
              sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                gap: 2 
              }}
            >
              <Button 
                variant="contained" 
                size="large" 
                sx={{ 
                  bgcolor: 'white', 
                  color: '#e67e22',
                  px: 4,
                  py: 2,
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
                  transition: 'all 0.3s ease',
                  marginBottom: '1em'
                }}
              >
                Support My Journey
              </Button>
              <Button 
                variant="outlined" 
                size="large" 
                sx={{ 
                  borderColor: 'white', 
                  color: 'white',
                  px: 4,
                  py: 2,
                  fontSize: '1rem',
                  fontWeight: 500,
                  borderRadius: '25px',
                  textTransform: 'none',
                  borderWidth: '2px',
                  '&:hover': {
                    borderColor: '#f5f5f5',
                    bgcolor: 'rgba(255, 255, 255, 0.1)',
                    borderWidth: '2px',
                    transform: 'translateY(-2px)'
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                Learn More About Families for Safe Streets
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CallToAction;
