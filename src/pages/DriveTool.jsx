import { Container, Typography } from '@mui/material';

export default function DriveTool() {
  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom align="center">
        Drive-to-Drive Cloner
      </Typography>
      <iframe
        src="https://script.google.com/macros/s/AKfycbzNC5zZ2dx6MxaA1nCFlSCbhS1JKvXT0NRXRSlPrtN10VB5O0e2j2a0fwXzlqWEezji/exec"
        title="Drive Cloner"
        style={{ width: '100%', height: 700, border: 'none', borderRadius: 8 }}
      />
    </Container>
  );
}