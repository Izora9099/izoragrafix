import { useAuth } from '../hooks/useAuth';
import { Box, Typography, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate('/');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Admin Dashboard
        </Typography>
        
        <Typography variant="subtitle1" gutterBottom>
          Welcome, {user?.email}
        </Typography>

        <Box sx={{ mt: 4 }}>
          {/* Add your admin dashboard content here */}
          <Typography variant="h6" gutterBottom>
            Quick Actions
          </Typography>
          
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate('/admin/gallery')}
            sx={{ mr: 2, mb: 2 }}
          >
            Manage Gallery
          </Button>
          
          <Button
            variant="contained"
            color="primary"
            onClick={() => navigate('/admin/reviews')}
            sx={{ mr: 2, mb: 2 }}
          >
            Manage Reviews
          </Button>

          <Button
            variant="contained"
            color="error"
            onClick={handleLogout}
            sx={{ mb: 2 }}
          >
            Logout
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Admin;
