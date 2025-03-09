import { Container, Typography, Box } from '@mui/material';

const Admin = () => {
  return (
    <Box sx={{ width: '100%' }}>
      <Box
        sx={{
          position: 'relative',
          bgcolor: 'background.paper',
          py: 4,
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            bgcolor: 'background.paper',
            width: '100vw',
            ml: '50%',
            transform: 'translateX(-50%)',
            zIndex: 0,
          }
        }}
      >
        <Container maxWidth={false} sx={{ position: 'relative', zIndex: 1 }}>
          <Typography variant="h2" gutterBottom>
            Admin Dashboard
          </Typography>
          <Typography variant="body1">
            Coming soon: Admin panel for managing services, products, and reviews.
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default Admin;
