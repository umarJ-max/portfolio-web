import { Box, Typography, IconButton } from '@mui/material';
import PaletteIcon from '@mui/icons-material/Palette';
import { useState } from 'react';

export default function ColorMixer({ setMode }) {
  const [show, setShow] = useState(false);

  return (
    <Box sx={{ position: 'fixed', top: 16, right: 16, zIndex: 1000 }}>
      <IconButton color="primary" onClick={() => setShow(!show)}>
        <PaletteIcon />
      </IconButton>
      {show && (
        <Box sx={{ p: 2, bgcolor: 'background.paper', borderRadius: 2, boxShadow: 3 }}>
          <Typography variant="body2" sx={{ mb: 1 }}>Theme</Typography>
          <Box sx={{ display: 'flex', gap: 1, mt: 1 }}>
            <button onClick={() => setMode('light')}>Light</button>
            <button onClick={() => setMode('dark')}>Dark</button>
          </Box>
        </Box>
      )}
    </Box>
  );
}
