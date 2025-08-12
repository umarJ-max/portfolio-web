import { Box, Typography, Card, Grid, Button, Container, Stack } from '@mui/material';
import CloudSyncIcon from '@mui/icons-material/CloudSync';
import StorageIcon from '@mui/icons-material/Storage';
import AutomationIcon from '@mui/icons-material/SmartToy';
import CodeIcon from '@mui/icons-material/Code';

export default function Tools() {
  return (
    <Box>
      {/* Hero Section */}
      <Box 
        sx={{ 
          pt: { xs: 10, md: 8 },
          pb: 6,
          marginTop: { xs: '56px', sm: '64px' },
          bgcolor: 'background.paper',
          borderBottom: 1,
          borderColor: 'divider'
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={4} alignItems="center" textAlign="center">
            <Typography 
              variant="h2"
              sx={{
                fontWeight: 800,
                color: 'primary.main',
                fontSize: { xs: '2.5rem', md: '3.5rem' }
              }}
            >
              My Tools & Projects
            </Typography>
            <Typography 
              variant="h5"
              sx={{
                color: 'text.secondary',
                maxWidth: 800,
                mx: 'auto',
                fontWeight: 400
              }}
            >
              A collection of powerful automation tools and projects designed to simplify workflows
              and enhance productivity.
            </Typography>
          </Stack>
        </Container>
      </Box>

      {/* Tools Grid */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Grid container spacing={4}>
          {/* Drive to Drive Cloner */}
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: (theme) => theme.shadows[8]
                }
              }}
            >
              <Box
                sx={{
                  p: 3,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  borderBottom: 1,
                  borderColor: 'divider'
                }}
              >
                <Box
                  sx={{
                    p: 1.5,
                    borderRadius: 2,
                    bgcolor: 'primary.main',
                    color: 'white',
                    display: 'flex'
                  }}
                >
                  <CloudSyncIcon fontSize="large" />
                </Box>
                <Box>
                  <Typography variant="h6" fontWeight={600}>
                    Drive to Drive Cloner
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Google Drive File Transfer Tool
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ p: 3, flexGrow: 1 }}>
                <Typography color="text.secondary" paragraph>
                  Seamlessly clone files from one Google Drive to another with a single click.
                  Fast, secure, and hassle-free transfer of your important files.
                </Typography>
                <Stack spacing={2}>
                  <Typography variant="subtitle2" color="text.primary">
                    Key Features:
                  </Typography>
                  <Box component="ul" sx={{ pl: 2, mt: 1 }}>
                    <Typography component="li" variant="body2" color="text.secondary">
                      Fast and reliable file transfer
                    </Typography>
                    <Typography component="li" variant="body2" color="text.secondary">
                      Secure authentication
                    </Typography>
                    <Typography component="li" variant="body2" color="text.secondary">
                      Preserves file structure
                    </Typography>
                  </Box>
                </Stack>
              </Box>
              <Box sx={{ p: 3, pt: 0 }}>
                <Button
                  variant="contained"
                  fullWidth
                  href="https://script.google.com/macros/s/AKfycbwVKWYRDaZh1HOXDrAoYj5WRAfJXDRRvUBZYh5pOBKP-5FLERKL5xlW1tymug7275fg/exec"
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    py: 1.5,
                    background: theme => `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-2px)',
                      boxShadow: '0 8px 20px rgba(0,0,0,0.2)'
                    }
                  }}
                >
                  Launch Tool
                </Button>
              </Box>
            </Card>
          </Grid>

          {/* Coming Soon Card */}
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                bgcolor: 'background.paper',
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: (theme) => theme.shadows[8]
                }
              }}
            >
              <Box
                sx={{
                  p: 3,
                  display: 'flex',
                  alignItems: 'center',
                  gap: 2,
                  borderBottom: 1,
                  borderColor: 'divider'
                }}
              >
                <Box
                  sx={{
                    p: 1.5,
                    borderRadius: 2,
                    bgcolor: 'secondary.main',
                    color: 'white',
                    display: 'flex'
                  }}
                >
                  <AutomationIcon fontSize="large" />
                </Box>
                <Box>
                  <Typography variant="h6" fontWeight={600}>
                    AI Assistant
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Coming Soon
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ p: 3, flexGrow: 1 }}>
                <Typography color="text.secondary" paragraph>
                  An intelligent assistant powered by advanced AI to help automate your daily tasks
                  and boost productivity. Stay tuned for this exciting release!
                </Typography>
                <Stack spacing={2}>
                  <Typography variant="subtitle2" color="text.primary">
                    Planned Features:
                  </Typography>
                  <Box component="ul" sx={{ pl: 2, mt: 1 }}>
                    <Typography component="li" variant="body2" color="text.secondary">
                      Natural language processing
                    </Typography>
                    <Typography component="li" variant="body2" color="text.secondary">
                      Task automation
                    </Typography>
                    <Typography component="li" variant="body2" color="text.secondary">
                      Smart scheduling
                    </Typography>
                  </Box>
                </Stack>
              </Box>
              <Box sx={{ p: 3, pt: 0 }}>
                <Button
                  variant="outlined"
                  fullWidth
                  disabled
                  sx={{ py: 1.5 }}
                >
                  Coming Soon
                </Button>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
