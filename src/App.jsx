import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, useTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Home from './pages/Home';
import Tools from './pages/Tools';
import NotFound from './pages/NotFound';
import { useState, useMemo } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Container, Paper } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

function App() {
  const [mode, setMode] = useState('light');
  
  const theme = useMemo(() => createTheme({
    palette: {
      mode,
      primary: {
        main: mode === 'dark' ? '#14B8A6' : '#1E3A8A',
      },
      secondary: {
        main: mode === 'dark' ? '#FACC15' : '#14B8A6',
      },
      background: {
        default: mode === 'dark' ? '#0F172A' : '#F8FAFC',
        paper: mode === 'dark' ? '#1E293B' : '#FFFFFF',
      },
      text: {
        primary: mode === 'dark' ? '#F8FAFC' : '#0F172A',
        secondary: mode === 'dark' ? '#94A3B8' : '#64748B',
      }
    },
    shape: {
      borderRadius: 12
    },
    typography: {
      fontFamily: 'Poppins, Inter, system-ui, sans-serif',
      h1: { fontWeight: 700 },
      h2: { fontWeight: 700 },
      h3: { fontWeight: 600 },
      h4: { fontWeight: 600 },
      h5: { fontWeight: 500 },
      h6: { fontWeight: 500 },
      subtitle1: { fontWeight: 500 },
      subtitle2: { fontWeight: 500 },
      body1: { fontFamily: 'Inter, system-ui, sans-serif' },
      body2: { fontFamily: 'Inter, system-ui, sans-serif' },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: 'none',
            fontWeight: 500,
            borderRadius: 8,
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            backgroundImage: 'none',
          },
        },
      },
    },
  }), [mode]);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Paper 
        sx={{ 
          minHeight: '100vh',
          borderRadius: 0,
          backgroundColor: 'background.default'
        }}
      >
        <Router>
          <Box
            sx={{
              minHeight: '100vh',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            <NavBar mode={mode} setMode={setMode} />
            <Box
              component="main"
              sx={{
                flex: 1,
                width: '100%',
                backgroundColor: 'background.default'
              }}
            >
              <Routes>
                <Route path="/" element={<Home mode={mode} />} />
                <Route path="/tools" element={<Tools />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Box>
          </Box>
        </Router>
      </Paper>
    </ThemeProvider>
  );
}

function NavBar({ mode, setMode }) {
  const location = useLocation();
  const theme = useTheme();
  
  return (
    <AppBar 
      position="fixed" 
      elevation={0} 
      sx={{
        bgcolor: mode === 'dark' ? 'rgba(30, 41, 59, 0.8)' : 'rgba(255, 255, 255, 0.8)',
        borderBottom: 1,
        borderColor: 'divider',
        backdropFilter: 'blur(12px)',
        boxShadow: 'none',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: theme => `linear-gradient(90deg, ${theme.palette.primary.main}00, ${theme.palette.primary.main}, ${theme.palette.primary.main}00)`
        }
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ height: 64, px: { xs: 2, sm: 3 } }}>
          <Typography 
            variant="h6" 
            component={Link} 
            to="/"
            sx={{ 
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: 1,
              color: 'text.primary',
              textDecoration: 'none',
              '&:hover': { color: 'primary.main' }
            }}
          >
            Umar J
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Button
              component={Link}
              to="/"
              sx={{
                px: 2,
                py: 1,
                color: location.pathname === '/' ? 'primary.main' : 'text.primary',
                fontWeight: location.pathname === '/' ? 600 : 500,
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  left: 8,
                  right: 8,
                  height: 2,
                  bgcolor: 'primary.main',
                  borderRadius: 1,
                  transform: location.pathname === '/' ? 'scaleX(1)' : 'scaleX(0)',
                  transition: 'transform 0.3s ease'
                },
                '&:hover::after': {
                  transform: 'scaleX(1)'
                }
              }}
            >
              Home
            </Button>
            <Button
              component={Link}
              to="/tools"
              sx={{
                px: 2,
                py: 1,
                color: location.pathname === '/tools' ? 'primary.main' : 'text.primary',
                fontWeight: location.pathname === '/tools' ? 600 : 500,
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  left: 8,
                  right: 8,
                  height: 2,
                  bgcolor: 'primary.main',
                  borderRadius: 1,
                  transform: location.pathname === '/tools' ? 'scaleX(1)' : 'scaleX(0)',
                  transition: 'transform 0.3s ease'
                },
                '&:hover::after': {
                  transform: 'scaleX(1)'
                }
              }}
            >
              Tools
            </Button>
            <IconButton
              onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
              sx={{
                ml: 1,
                color: 'text.primary',
                bgcolor: theme => theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.05)',
                '&:hover': {
                  bgcolor: theme => theme.palette.mode === 'dark' ? 'rgba(255,255,255,0.2)' : 'rgba(0,0,0,0.1)'
                },
                transition: 'all 0.3s ease'
              }}
            >
              {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default App;
