import { 
  Box, 
  Typography, 
  Avatar, 
  Stack, 
  IconButton, 
  Button, 
  Card,
  Container,
  Grid,
  useTheme
} from '@mui/material';
import { useState } from 'react';
import profileImage from '/src/assets/Picsart_24-12-23_09-48-46-854.JPG';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CodeIcon from '@mui/icons-material/Code';
import AutomationIcon from '@mui/icons-material/SmartToy';

export default function Home() {
  const theme = useTheme();
  const [profile] = useState("https://avatars.githubusercontent.com/u/159282383?v=4");

  return (
    <Box>
      {/* Hero Section */}
      <Box 
        sx={{
          pt: { xs: 10, md: 8 },  // Increased top padding for mobile
          pb: { xs: 8, md: 12 },
          minHeight: '90vh',
          display: 'flex',
          alignItems: 'center',
          marginTop: { xs: '56px', sm: '64px' }  // Add margin for the navbar height
        }}
      >
        <Container maxWidth="lg">
          <Stack 
            direction={{ xs: 'column', md: 'row' }}
            spacing={{ xs: 6, md: 10 }}
            alignItems="center"
            justifyContent="space-between"
          >
            <Box sx={{ maxWidth: 600, pr: { md: 4 } }}>
              <Typography 
                variant="h2" 
                gutterBottom
                sx={{ 
                  fontSize: { xs: '2.5rem', md: '4rem' },
                  fontWeight: 800,
                  background: theme => theme.palette.mode === 'dark'
                    ? 'linear-gradient(90deg, #14B8A6 30%, #FACC15 100%)'
                    : 'linear-gradient(90deg, #1E3A8A 30%, #14B8A6 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  mb: 2,
                  letterSpacing: '-0.02em',
                  textShadow: '0 2px 10px rgba(0,0,0,0.1)',
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: '-10px',
                    left: '0',
                    width: '60px',
                    height: '4px',
                    background: theme => theme.palette.primary.main,
                    borderRadius: '2px'
                  }
                }}
              >
                Hi, I'm Umar J
              </Typography>
              <Typography 
                variant="h4"
                sx={{ 
                  mb: 3,
                  color: 'text.primary',
                  fontWeight: 700,
                  display: 'flex',
                  flexDirection: { xs: 'column', sm: 'row' },
                  gap: { xs: 1, sm: 2 },
                  alignItems: { xs: 'flex-start', sm: 'center' }
                }}
              >
                <Box component="span" sx={{ 
                  position: 'relative',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: '0',
                    left: '0',
                    width: '100%',
                    height: '2px',
                    background: 'currentColor',
                    opacity: 0.3
                  }
                }}>
                  Python Developer
                </Box>
                <Box component="span" sx={{ 
                  color: 'secondary.main',
                  background: theme => `linear-gradient(120deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 800
                }}> 
                  & Automation Expert
                </Box>
              </Typography>
              <Typography 
                variant="body1" 
                sx={{ 
                  mb: 4,
                  color: 'text.secondary',
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  maxWidth: '600px',
                  '& .highlight': {
                    color: 'text.primary',
                    fontWeight: 600
                  }
                }}
              >
                I create <span className="highlight">smart automation solutions</span> and <span className="highlight">modern web experiences</span>. 
                Specializing in <span className="highlight">Python development</span> and <span className="highlight">AI-powered tools</span> that make 
                complex tasks simple and efficient.
              </Typography>
              <Stack 
                direction={{ xs: 'column', sm: 'row' }}
                spacing={2}
                sx={{ mb: 4 }}
              >
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<CodeIcon />}
                  href="https://script.google.com/macros/s/AKfycbwVKWYRDaZh1HOXDrAoYj5WRAfJXDRRvUBZYh5pOBKP-5FLERKL5xlW1tymug7275fg/exec"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    background: theme => `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 20px rgba(0,0,0,0.2)'
                    }
                  }}
                >
                  Try My Tools
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  href="https://github.com/umarJ-max"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View GitHub
                </Button>
              </Stack>
            </Box>

            <Box 
              sx={{
                position: 'relative',
                width: { xs: '100%', md: '450px' },
                height: { xs: '400px', md: '550px' },
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: theme => `0 20px 40px ${theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.4)' : 'rgba(0,0,0,0.2)'}`,
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: (theme) => 
                    theme.palette.mode === 'dark' 
                      ? 'linear-gradient(180deg, rgba(20,184,166,0.2) 0%, rgba(30,58,138,0.2) 100%)'
                      : 'linear-gradient(180deg, rgba(20,184,166,0.1) 0%, rgba(248,250,252,0.1) 100%)',
                  zIndex: 2
                },
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  top: '5%',
                  left: '5%',
                  right: '5%',
                  bottom: '5%',
                  border: '2px solid',
                  borderColor: 'primary.main',
                  borderRadius: '15px',
                  opacity: 0.5,
                  zIndex: 1
                }
              }}
            >
              <Box
                component="img"
                src={profileImage}
                alt="Umar J"
                sx={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  filter: theme => theme.palette.mode === 'dark' ? 'brightness(0.9)' : 'none',
                  transition: 'transform 0.3s ease',
                  '&:hover': {
                    transform: 'scale(1.02)'
                  }
                }}
              />
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* About Section */}
      <Box 
        sx={{ 
          py: { xs: 6, md: 10 },
          bgcolor: 'background.paper'
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Typography 
                variant="h3" 
                gutterBottom
                sx={{ 
                  color: 'primary.main',
                  fontWeight: 700,
                  mb: 3
                }}
              >
                About Me
              </Typography>
              <Typography 
                variant="body1"
                sx={{ 
                  color: 'text.secondary',
                  mb: 2,
                  fontSize: '1.1rem',
                  lineHeight: 1.7
                }}
              >
                I'm a passionate Python developer from Pakistan, focused on creating 
                automation solutions that make a difference. With expertise in AI 
                and machine learning, I build tools that transform complex workflows 
                into seamless processes.
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                <LocationOnIcon color="secondary" />
                <Typography variant="subtitle1" color="text.secondary">
                  Based in Pakistan
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card 
                elevation={0}
                sx={{ 
                  p: 3,
                  height: '100%',
                  border: 1,
                  borderColor: 'divider'
                }}
              >
                <Stack spacing={3}>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      color: 'text.primary',
                      fontWeight: 600
                    }}
                  >
                    Connect with me
                  </Typography>
                  <Stack direction="row" spacing={2}>
                    <IconButton 
                      href="mailto:umerjutt5397@gmail.com"
                      target="_blank"
                      sx={{ 
                        color: 'primary.main',
                        '&:hover': { color: 'secondary.main' }
                      }}
                    >
                      <EmailIcon />
                    </IconButton>
                    <IconButton 
                      href="https://github.com/umarJ-max"
                      target="_blank"
                      sx={{ 
                        color: 'text.primary',
                        '&:hover': { color: 'primary.main' }
                      }}
                    >
                      <GitHubIcon />
                    </IconButton>
                    <IconButton 
                      href="https://www.instagram.com/umar.j0_/"
                      target="_blank"
                      sx={{ 
                        color: 'secondary.main',
                        '&:hover': { color: 'primary.main' }
                      }}
                    >
                      <InstagramIcon />
                    </IconButton>
                    <IconButton 
                      href="https://web.facebook.com/profile.php?id=61560296243044"
                      target="_blank"
                      sx={{ 
                        color: 'primary.light',
                        '&:hover': { color: 'primary.main' }
                      }}
                    >
                      <FacebookIcon />
                    </IconButton>
                  </Stack>
                </Stack>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
