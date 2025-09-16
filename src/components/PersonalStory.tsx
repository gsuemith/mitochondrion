import React from 'react';
import { Box, Container, Typography, Grid, Paper, Chip } from '@mui/material';
import { Favorite, LocalFlorist } from '@mui/icons-material';
import momPhoto from '../assets/images/colliseum-mom.jpg';

const PersonalStory: React.FC = () => {
  return (
    <Box
      className="full-width-section liquid-blue-bg"
      sx={{ 
        py: 8, 
        padding: '64px 0',
        boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.1), 0 4px 20px rgba(0, 0, 0, 0.1)',
        position: 'relative',
        zIndex: 2,
        borderBottomLeftRadius: '50% 200px',
        borderBottomRightRadius: '50% 50px',
        marginBottom: '-50px',
        left: '-30%',
        width: '160%',
        overflow: 'hidden',
      }}
    >
      <Container 
        maxWidth="lg" 
        sx={{ 
          padding: '0 24px', 
          marginTop: '1em', 
          width: '95vw' 
        }}
      >
        <Grid container spacing={6} alignItems="center">
          <Grid size={{ sm: 12, md: 6}}>
            <Typography variant="h3" component="h2" gutterBottom color="primary">
              In Memory of Mom
            </Typography>
            <Typography 
              variant="body1" 
              paragraph 
              sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}
            >
              In 2021, I lost my mom to a car crash. This tragedy shaped my understanding of how 
              traffic engineering can mean the difference between life and death. Now, as I prepare 
              for the Rome Marathon, I'm running not just for personal health and achievement, but 
              to honor her memory and support organizations working to prevent such tragedies.
            </Typography>
            <Typography 
              variant="body1" 
              paragraph 
              sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}
            >
              Every mile I train, every step I take, is propelled by the mitochondria I inherited 
              directly from her. In a very real way, I'm keeping a part of her alive by multiplying 
              these cellular engines through my training.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
              <Chip icon={<Favorite />} label="In Loving Memory" color="primary" />
            </Box>
          </Grid>
          <Grid size={{ sm: 12, md: 6}}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
              {/* Mom's Photo */}
              <Paper 
                elevation={8} 
                sx={{ 
                  overflow: 'hidden',
                  borderRadius: '20px',
                  boxShadow: '0 12px 40px rgba(0, 0, 0, 0.2)',
                  transform: 'translateY(-2px)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 16px 48px rgba(0, 0, 0, 0.25)'
                  }
                }}
              >
                <Box
                  component="img"
                  src={momPhoto}
                  alt="My mom at the Colosseum in Rome"
                  sx={{
                    width: '100%',
                    height: 'auto',
                    display: 'block'
                  }}
                />
                <Box sx={{ p: 2, textAlign: 'center', bgcolor: '#fdf2e9' }}>
                  <Typography 
                    variant="body2" 
                    color="text.secondary" 
                    sx={{ fontStyle: 'italic' }}
                  >
                    My mom at the Colosseum in Rome              
                  </Typography>
                  <Chip 
                    icon={<LocalFlorist />} 
                    label="Cecilia Suemith 1959 - 2021" 
                    variant="outlined" 
                  />
                </Box>
              </Paper>
              
              {/* Mitochondria Card */}
              <Paper 
                className="fun-card floating-card-1"
                elevation={6} 
                sx={{ 
                  p: 4, 
                  textAlign: 'center',
                  background: 'linear-gradient(45deg, #f39c12, #e67e22)',
                  boxShadow: '0 12px 40px rgba(0, 0, 0, 0.2)',
                  transform: 'translateY(-2px)',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                  borderColor: '#8b0000 !important', // Dark red for high contrast
                  '&:hover': {
                    transform: 'translateY(-4px)',
                    boxShadow: '0 16px 48px rgba(0, 0, 0, 0.25)',
                    borderColor: '#660000 !important' // Even darker red on hover
                  }
                }}
              >
                <Typography variant="h4" gutterBottom>
                  The Mitochondria Connection
                </Typography>
                <Typography variant="body1" paragraph>
                  Mitochondria are the power plants of our cells. They have their own DNA and are 
                  inherited exclusively from our moms. As I train for this marathon, I'm literally 
                  multiplying the mitochondria my mom gave me, keeping her biological legacy going 
                  strong in every cell.
                </Typography>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default PersonalStory;
