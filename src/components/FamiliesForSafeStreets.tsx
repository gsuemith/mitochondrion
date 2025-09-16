import React from 'react';
import { Box, Container, Typography, Card, CardContent } from '@mui/material';
import { RoundaboutRight, DirectionsRun, AccountBalance } from '@mui/icons-material';
import fssLogo from '../assets/images/FSS-logo.webp';

const FamiliesForSafeStreets: React.FC = () => {
  return (
    <Box 
      className="full-width-section liquid-green-bg" 
      sx={{ 
        py: 8,
        padding: '64px 0',
        boxShadow: '0 -6px 24px rgba(0, 0, 0, 0.15), 0 6px 24px rgba(0, 0, 0, 0.15)',
        position: 'relative',
        zIndex: 1
      }}
    >
      <Container 
        maxWidth="lg" 
        sx={{ 
          padding: '0 24px', 
          paddingTop: '1em' 
        }}
      >
        <Box 
          sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, 
            gap: 4 
          }}
        >
          
          {/* Traffic Engineering Card */}
          <Card className="fun-card floating-card-1" elevation={6} sx={{ 
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
            transform: 'translateY(-2px)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            backgroundColor: '#e3f2fd !important', // Light blue
            borderColor: '#1565c0 !important', // Dark blue
            '&:hover': {
              transform: 'translateY(-4px)',
              boxShadow: '0 12px 40px rgba(0, 0, 0, 0.2)',
              backgroundColor: '#bbdefb !important', // Slightly darker blue on hover
              borderColor: '#0d47a1 !important' // Even darker blue on hover
            }
          }}>
            <CardContent sx={{ textAlign: 'center', p: 4 }}>
              <RoundaboutRight 
                sx={{ 
                  fontSize: 60, 
                  color: '#e67e22', 
                  mb: 2, 
                  transform: 'scaleX(-1)' 
                }} 
              />
              <Typography variant="h5" gutterBottom>
                Traffic Engineering
              </Typography>
              <Typography variant="body1">
                Promoting evidence-based road design that prioritizes safety over speed, 
                including protected bike lanes, pedestrian crossings, and traffic calming 
                measures.
              </Typography>
            </CardContent>
          </Card>

          {/* Title */}
          <Box sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            textAlign: 'center',
            py: 4
          }}>
            <Box 
              component="img"
              src={fssLogo}
              alt="Families for Safe Streets Logo"
              sx={{
                height: '160px',
                width: 'auto',
                mx: 'auto',
                mb: 2,
                objectFit: 'contain'
              }}
            />
            <Typography 
              variant="h6" 
              sx={{ maxWidth: '500px', mx: 'auto' }}
            >
              Advocating for traffic engineering solutions that save lives
            </Typography>
          </Box>

          {/* Vision Zero Card */}
          <Card className="fun-card floating-card-2" elevation={6} sx={{ 
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
            <CardContent sx={{ textAlign: 'center', p: 4 }}>
              <DirectionsRun sx={{ fontSize: 60, color: '#e67e22', mb: 2 }} />
              <Typography variant="h5" gutterBottom>
                Vision Zero
              </Typography>
              <Typography variant="body1">
                Working toward the goal of zero traffic fatalities through comprehensive 
                safety strategies, policy advocacy, and community education.
              </Typography>
            </CardContent>
          </Card>
          
          {/* Policy Change Card */}
          <Card className="fun-card floating-card-3" elevation={6} sx={{ 
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.15)',
            transform: 'translateY(-2px)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            backgroundColor: '#fce4ec !important', // Light pink
            borderColor: '#c2185b !important', // Dark pink
            '&:hover': {
              transform: 'translateY(-4px)',
              boxShadow: '0 12px 40px rgba(0, 0, 0, 0.2)',
              backgroundColor: '#f8bbd9 !important', // Slightly darker pink on hover
              borderColor: '#880e4f !important' // Even darker pink on hover
            }
          }}>
            <CardContent sx={{ textAlign: 'center', p: 4 }}>
              <AccountBalance sx={{ fontSize: 60, color: '#e67e22', mb: 2 }} />
              <Typography variant="h5" gutterBottom>
                Policy Change
              </Typography>
              <Typography variant="body1">
                Advocating for legislative changes that prioritize pedestrian and cyclist safety, 
                including lower speed limits, improved infrastructure funding, and stronger 
                enforcement.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </Box>
  );
};

export default FamiliesForSafeStreets;
