import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';

const TrainingScience: React.FC = () => {
  return (
    <Box 
      className="liquid-blue-bg" 
      sx={{ 
        py: 8, 
        padding: '64px 0',
        boxShadow: '0 -4px 20px rgba(0, 0, 0, 0.1), 0 4px 20px rgba(0, 0, 0, 0.1)',
        position: 'relative',
        zIndex: 2,
        borderTopRightRadius: '50% 200px',
        borderTopLeftRadius: '50% 50px',
        left: '-30%',
        width: '160%',
        overflow: 'hidden',
        top: '-45px',
      }}
    >
      <Container 
        maxWidth="lg" 
        sx={{ 
          padding: '0 24px', 
          width: '95vw' 
        }}
      >
        <Typography 
          variant="h3" 
          component="h2" 
          textAlign="center" 
          gutterBottom 
          color="primary"
        >
          The Science of Marathon Training
        </Typography>
        <Typography 
          variant="h6" 
          textAlign="center" 
          sx={{ mb: 6 }}
        >
          How training multiplies the mitochondria my mom gave me
        </Typography>
        
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={6}>
            <Grid size={{ sm: 12, md: 12}}>
              <Paper className="fun-card training-card-1" elevation={6} sx={{ 
                p: 4, 
                height: '100%',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
                transform: 'translateY(-2px)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 12px 40px rgba(0, 0, 0, 0.2)'
                }
              }}>
                <Typography variant="h5" gutterBottom color="primary">
                  Mitochondrial Biogenesis
                </Typography>
                <Typography variant="body1" paragraph>
                  Endurance training stimulates the creation of new mitochondria in muscle cells. 
                  The mitochondria I inherited from my mom will multiply as I train, creating 
                  more cellular powerhouses that carry her genetic legacy.
                </Typography>
                <Typography variant="body1" paragraph>
                  This isn't just about running faster or longer—it's about keeping a piece of 
                  my mom alive in every cell, growing stronger with each training session.
                </Typography>
              </Paper>
            </Grid>
            <Grid size={{ sm: 12, md: 6}}>
              <Paper className="fun-card training-timeline-card training-card-2" elevation={6} sx={{
                p: 4, 
                height: '100%',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
                transform: 'translateY(-2px)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                backgroundColor: '#ffebee !important', // Light red background
                borderColor: '#f44336 !important', // Red border
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 12px 40px rgba(0, 0, 0, 0.2)',
                  backgroundColor: '#ffcdd2 !important', // Darker red on hover
                  borderColor: '#d32f2f !important' // Darker red border on hover
                }
              }}>
                <Typography variant="h5" gutterBottom color="secondary">
                  Training Timeline
                </Typography>
                <Box sx={{ mb: 3 }}>
                  <Typography variant="h6" color="secondary">
                    Phase 1: Base Building
                  </Typography>
                  <Typography variant="body2">
                    Building aerobic capacity and mitochondrial density
                  </Typography>
                </Box>
                <Box sx={{ mb: 3 }}>
                  <Typography variant="h6" color="secondary">
                    Phase 2: Strength & Speed
                  </Typography>
                  <Typography variant="body2">
                    Developing power and efficiency in muscle cells
                  </Typography>
                </Box>
                <Box>
                  <Typography variant="h6" color="secondary">
                    Phase 3: Marathon Prep
                  </Typography>
                  <Typography variant="body2">
                    Peak training and race-specific preparation
                  </Typography>
                </Box>
              </Paper>
            </Grid>
            <Grid size={{ sm: 12, md: 6}}>
              <Paper className="fun-card training-card-3" elevation={6} sx={{
                p: 4, 
                height: '100%',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
                transform: 'translateY(-2px)',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                backgroundColor: '#e8f5e8 !important', // Light green
                borderColor: '#2e7d32 !important', // Dark green
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 12px 40px rgba(0, 0, 0, 0.2)',
                  backgroundColor: '#c8e6c9 !important', // Slightly darker green on hover
                  borderColor: '#1b5e20 !important' // Even darker green on hover
                }
              }}>
                <Typography variant="h5" gutterBottom color="primary">
                  Nutrition & Recovery
                </Typography>
                <Typography variant="body1" paragraph>
                  Proper nutrition fuels mitochondrial function and recovery. The foods I eat 
                  directly support the mitochondria, helping them regenerate and multiply more 
                  effectively.
                </Typography>
                <Typography variant="body1" paragraph>
                  Quality sleep and recovery allow these cellular powerhouses to repair and 
                  strengthen, ensuring they thrive in every training session.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default TrainingScience;
