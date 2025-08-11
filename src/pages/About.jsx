import { Box, Typography, Avatar, Button, TextField } from '@mui/material';
import { useState } from 'react';

export default function About() {
  const [profile, setProfile] = useState(null);
  const [about, setAbout] = useState('I am Umar J, a Python developer from Pakistan specializing in automation agents and smart tools. My passion is solving problems with code and building solutions that make life easier.');

  const handleProfileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (ev) => setProfile(ev.target.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <Box sx={{ maxWidth: 500, mx: 'auto', py: 6, textAlign: 'center' }}>
      <Avatar src={profile} sx={{ width: 120, height: 120, mx: 'auto', mb: 2 }} />
      <Button variant="contained" component="label" sx={{ mb: 2 }}>
        Upload Profile
        <input type="file" hidden accept="image/*" onChange={handleProfileUpload} />
      </Button>
      <TextField
        label="About Me"
        multiline
        rows={5}
        value={about}
        onChange={e => setAbout(e.target.value)}
        fullWidth
        sx={{ mb: 2 }}
      />
      <Typography variant="body1" sx={{ mt: 2 }}>
        {about}
      </Typography>
    </Box>
  );
}
