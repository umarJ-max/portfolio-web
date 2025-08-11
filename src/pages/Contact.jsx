import { Box, Typography, IconButton, Stack } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Contact() {
  return (
    <Box sx={{ maxWidth: 500, mx: 'auto', py: 6, textAlign: 'center' }}>
      <Typography variant="h4" sx={{ mb: 3 }}>Contact</Typography>
      <Stack direction="row" spacing={2} justifyContent="center" sx={{ mb: 2 }}>
        <IconButton color="primary" href="mailto:umerjutt5397@gmail.com" target="_blank"><EmailIcon /></IconButton>
        <IconButton color="primary" href="https://github.com/umarJ-max" target="_blank"><GitHubIcon /></IconButton>
        <IconButton color="primary" href="https://www.instagram.com/umar.j0_/" target="_blank"><InstagramIcon /></IconButton>
        <IconButton color="primary" href="https://web.facebook.com/profile.php?id=61560296243044" target="_blank"><FacebookIcon /></IconButton>
      </Stack>
      <Typography variant="body1" sx={{ mb: 1 }}>
        Email: umerjutt5397@gmail.com
      </Typography>
      <Typography variant="body1" sx={{ mb: 1 }}>
        Location: <LocationOnIcon fontSize="small" /> Pakistan
      </Typography>
    </Box>
  );
}
