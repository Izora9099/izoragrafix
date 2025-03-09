import { Card, CardContent, Typography, Box, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ServiceCard = ({ title, description, icon }) => {
  const navigate = useNavigate();

  const getServicePath = (title) => {
    const paths = {
      'Graphic Design': '/services#graphic-design',
      'Tech Solutions': '/services#tech-solutions',
      'Portfolio': '/gallery'
    };
    return paths[title] || '/services';
  };

  return (
    <Card
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: '0.3s',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: 6,
        },
      }}
    >
      <Box
        sx={{
          p: 3,
          display: 'flex',
          justifyContent: 'center',
          color: 'primary.main',
        }}
      >
        {icon}
      </Box>
      <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
        <Typography
          gutterBottom
          variant="h5"
          component="h3"
          sx={{ mb: 2 }}
        >
          {title}
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 2 }}>
          {description}
        </Typography>
        <Button
          variant="outlined"
          color="primary"
          onClick={() => navigate(getServicePath(title))}
        >
          Learn More
        </Button>
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
