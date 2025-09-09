
import React from 'react'
import { 
  Box, 
  Typography, 
  Container, 
  Button, 
  Card, 
  CardContent, 
  Grid, 
  Paper,
  Chip,
  ThemeProvider,
  createTheme
} from '@mui/material'
import momPhoto from './assets/images/colliseum-mom.jpg'
import { 
  Favorite, 
  DirectionsRun, 
  Biotech, 
  RoundaboutRight, 
  AccountBalance,
  Timeline,
  LocalFireDepartment,
  LocalFlorist
} from '@mui/icons-material'

// Create warm theme with orange, red, and light brown colors
const theme = createTheme({
  palette: {
    primary: {
      main: '#e67e22', // Orange
      light: '#f39c12', // Light orange
      dark: '#d35400', // Dark orange/red
    },
    secondary: {
      main: '#8b4513', // Light brown
      light: '#cd853f', // Lighter brown
      dark: '#654321', // Darker brown
    },
    background: {
      default: '#fdf2e9', // Very light warm background
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 300,
      fontSize: '2.5rem',
    },
    h2: {
      fontWeight: 300,
      fontSize: '2rem',
    },
    h3: {
      fontWeight: 300,
      fontSize: '1.75rem',
    },
    h4: {
      fontWeight: 300,
      fontSize: '1.5rem',
    },
    h5: {
      fontWeight: 300,
      fontSize: '1.25rem',
    },
    h6: {
      fontWeight: 300,
      fontSize: '1rem',
    },
    body1: {
      fontWeight: 300,
      fontSize: '1rem',
    },
    body2: {
      fontWeight: 300,
      fontSize: '0.875rem',
    },
    button: {
      fontWeight: 300,
      textTransform: 'none',
    },
  },
})

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ margin: 0, padding: 0 , backgroundColor: 'black'}}>
        {/* Hero Section */}
        <Box
          className="full-width-section"
          sx={{
            background: 'linear-gradient(135deg, #f39c12 0%, #e67e22 25%, #d35400 50%, #a04000 75%, #8b0000 100%)',
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
          <Container maxWidth="lg" sx={{ width: '95vw', paddingTop: '2em' }}>
            <Typography variant="h2" component="h1" gutterBottom>
              I am Running in 2026!
            </Typography>
            <Typography variant="h4" component="h2" gutterBottom sx={{ mb: 3 }}>
              Running for Safe Streets
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, maxWidth: '800px', mx: 'auto' }}>
              Join me in supporting Families for Safe Streets as I train to run the Rome Marathon. 
              Every step honors my mom's memory and helps prevent traffic fatalities through better engineering.
            </Typography>
            <Button 
              variant="contained" 
              size="large" 
              sx={{ 
                bgcolor: 'white', 
                color: '#e67e22',
                '&:hover': { bgcolor: '#f5f5f5' },
                px: 4,
                py: 2,
                marginBottom: '1em'
              }}
            >
              Support My Journey
            </Button>
          </Container>
        </Box>
        {/* Personal Story Section */}
        <Box className="full-width-section liquid-blue-bg" sx={{ 
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
        }}>
          <Container maxWidth="lg" sx={{ padding: '0 24px', marginTop: '1em', width: '95vw' }}>
          <Grid container spacing={6} alignItems="center">
            <Grid size={{ sm: 12, md: 6}}>
              <Typography variant="h3" component="h2" gutterBottom color="primary">
                In Memory of Mom
              </Typography>
              <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                In 2021, I lost my mom to a car crash. This tragedy shaped my understanding of how 
                traffic engineering can mean the difference between life and death. Now, as I prepare 
                for the Rome Marathon, I'm running not just for personal achievement, but to honor her 
                memory and support organizations working to prevent such tragedies.
              </Typography>
              <Typography variant="body1" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                Every mile I train, every step I take, carries with it the mitochondria I inherited 
                directly from her. In a very real way, I'm keeping a part of her alive by multiplying 
                these cellular powerhouses through my training.
              </Typography>
              <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
                <Chip icon={<Favorite />} label="In Loving Memory" color="primary" />
                <Chip icon={<LocalFlorist />} label="Cecilia Suemith 1959 - 2021" variant="outlined" />
              </Box>
            </Grid>
            <Grid size={{ sm: 12, md: 6}}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                {/* Mom's Photo */}
                <Paper 
                  className="fun-card floating-card-2"
                  elevation={8} 
                  sx={{ 
                    overflow: 'hidden',
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
                      display: 'block',
                      objectFit: 'cover'
                    }}
                  />
                  <Box sx={{ p: 2, textAlign: 'center', bgcolor: '#fdf2e9' }}>
                    <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
                      My mom at the Colosseum in Rome - a place that will always connect us
                    </Typography>
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
                    Mitochondria are the powerhouses of our cells, inherited exclusively from our moms. 
                    As I train for this marathon, I'm literally multiplying the mitochondria my mom 
                    gave me, keeping her biological legacy alive in every cell.
                  </Typography>
                  <Biotech sx={{ fontSize: 60, color: '#d35400', mt: 2 }} />
                </Paper>
              </Box>
            </Grid>
          </Grid>
          </Container>
        </Box>

        {/* Families for Safe Streets Section */}
        <Box className="full-width-section liquid-green-bg" sx={{ 
          py: 8,
          padding: '64px 0',
          boxShadow: '0 -6px 24px rgba(0, 0, 0, 0.15), 0 6px 24px rgba(0, 0, 0, 0.15)',
          position: 'relative',
          zIndex: 1
        }}>
          <Container maxWidth="lg" sx={{ padding: '0 24px', paddingTop: '1em' }}>
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 4 }}>
              
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
                  <RoundaboutRight sx={{ fontSize: 60, color: '#e67e22', mb: 2, transform: 'scaleX(-1)' }} />
                  <Typography variant="h5" gutterBottom>
                    Traffic Engineering
                  </Typography>
                  <Typography variant="body1">
                    Promoting evidence-based road design that prioritizes safety over speed, 
                    including protected bike lanes, pedestrian crossings, and traffic calming measures.
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
                <Typography variant="h3" component="h2" gutterBottom color="primary">
                  Families for Safe Streets
                </Typography>
                <Typography variant="h6" sx={{ maxWidth: '500px', mx: 'auto' }}>
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
                    Advocating for legislative changes that prioritize pedestrian and cyclist 
                    safety, including lower speed limits and improved infrastructure funding.
                  </Typography>
                </CardContent>
              </Card>
            </Box>
          </Container>
        </Box>

        {/* Training & Science Section */}
        <Box className="liquid-blue-bg" sx={{ 
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
        }}>
          <Container maxWidth="lg" sx={{ padding: '0 24px', width: '95vw' }}>
          <Typography variant="h3" component="h2" textAlign="center" gutterBottom color="primary">
            The Science of Marathon Training
          </Typography>
          <Typography variant="h6" textAlign="center" sx={{ mb: 6 }}>
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
                   <Typography variant="h6" color="secondary">Phase 1: Base Building</Typography>
                   <Typography variant="body2">Building aerobic capacity and mitochondrial density</Typography>
                 </Box>
                 <Box sx={{ mb: 3 }}>
                   <Typography variant="h6" color="secondary">Phase 2: Strength & Speed</Typography>
                   <Typography variant="body2">Developing power and efficiency in muscle cells</Typography>
                 </Box>
                 <Box>
                   <Typography variant="h6" color="secondary">Phase 3: Marathon Prep</Typography>
                   <Typography variant="body2">Peak training and race-specific preparation</Typography>
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
                   directly support the mitochondria, helping them 
                   regenerate and multiply more effectively.
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

        {/* Call to Action */}
        <Box
          className="full-width-section"
          sx={{
            background: 'linear-gradient(135deg, #f39c12 0%, #e67e22 25%, #d35400 50%, #a04000 75%, #8b0000 100%)',
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
            top: '-80px',
            width: '160%',
            marginBottom: '-200px',
            overflow: 'hidden',
          }}
        >
          <Container maxWidth="md" sx={{ padding: '0 24px', width: '95vw' }}>
            <Typography variant="h3" component="h2" gutterBottom>
              Support My Journey
            </Typography>
            <Typography variant="h6" paragraph sx={{ mb: 4 }}>
              Help me honor my mom's memory while supporting safer streets for everyone. 
              Your donation goes directly to Families for Safe Streets to fund their vital work.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Button 
                variant="contained" 
                size="large"
                sx={{ 
                  bgcolor: 'white', 
                  color: '#e67e22',
                  '&:hover': { bgcolor: '#f5f5f5' },
                  px: 4
                }}
              >
                Donate Now
              </Button>
              <Button 
                variant="outlined" 
                size="large"
                sx={{ 
                  borderColor: 'white', 
                  color: 'white',
                  '&:hover': { borderColor: '#f5f5f5', bgcolor: 'rgba(255,255,255,0.1)' },
                  px: 4
                }}
              >
                Learn More
              </Button>
            </Box>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default App