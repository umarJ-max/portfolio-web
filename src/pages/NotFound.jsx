import { Box, Typography } from '@mui/material';

export default function NotFound() {
  return (
    <Box sx={{ textAlign: 'center', py: 8 }}>
      <Typography variant="h3" color="error" sx={{ mb: 2 }}>
        404 - Page Not Found
      </Typography>
      <Typography variant="body1">The page you are looking for does not exist.</Typography>
    </Box>
  );
}
