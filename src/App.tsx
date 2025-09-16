import React from 'react';
import { Box, ThemeProvider, createTheme } from '@mui/material';
import Hero from './components/Hero';
import PersonalStory from './components/PersonalStory';
import FamiliesForSafeStreets from './components/FamiliesForSafeStreets';
import TrainingScience from './components/TrainingScience';
import CallToAction from './components/CallToAction';

// Create warm theme with orange, red, and light brown colors
const theme = createTheme({
  palette: {
    primary: {
      main: '#e67e22', // Warm orange
      light: '#f39c12',
      dark: '#d35400',
    },
    secondary: {
      main: '#c0392b', // Deep red
      light: '#e74c3c',
      dark: '#a93226',
    },
    background: {
      default: '#fdf2e9', // Light warm background
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 600,
    },
    h2: {
      fontWeight: 500,
    },
    h3: {
      fontWeight: 500,
    },
    h4: {
      fontWeight: 400,
    },
    h5: {
      fontWeight: 400,
    },
    h6: {
      fontWeight: 400,
    },
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ margin: 0, padding: 0, backgroundColor: 'black' }}>
        <Hero />
        <PersonalStory />
        <FamiliesForSafeStreets />
        <TrainingScience />
        <CallToAction />
      </Box>
    </ThemeProvider>
  );
};

export default App;