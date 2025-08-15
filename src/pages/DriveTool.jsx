import { Container, Typography, Box } from '@mui/material';

export default function DriveTool() {
  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', pt: { xs: '64px', sm: '70px' } }}>
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <Typography 
          variant="h4" 
          gutterBottom 
          align="center"
          sx={{ 
            mb: 4,
            color: 'primary.main',
            fontWeight: 700
          }}
        >
          Drive-to-Drive Cloner
        </Typography>
        <Box
          sx={{
            width: '100%',
            height: 'calc(100vh - 180px)',
            borderRadius: 2,
            overflow: 'hidden',
            boxShadow: theme => `0 8px 32px ${theme.palette.mode === 'dark' ? 'rgba(0,0,0,0.4)' : 'rgba(0,0,0,0.1)'}`,
          }}
        >
          <iframe
            src="https://script.google.com/macros/s/AKfycbxdJYgCNzyfqj6AhlrNCP2tLdeiKPr8JWI3O0dgJ-FWCteYY92y3dmrb1eEw1k1EGNO/exec"
            title="Drive Cloner"
            style={{ width: '100%', height: '100%', border: 'none' }}
          />
        </Box>
      </Container>
    </Box>
  );
}