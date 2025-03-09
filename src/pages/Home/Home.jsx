import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
} from '@mui/material';
import BrushIcon from '@mui/icons-material/Brush';
import ComputerIcon from '@mui/icons-material/Computer';
import CollectionsIcon from '@mui/icons-material/Collections';

const Home = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: 'Graphic Design',
      description: 'Professional designs for flyers, posters, banners, and digital art',
      icon: <BrushIcon sx={{ fontSize: 40 }} />,
      link: '/services#graphic-design',
    },
    {
      title: 'Tech Solutions',
      description: 'Software maintenance, OS installation, and quality hardware sales',
      icon: <ComputerIcon sx={{ fontSize: 40 }} />,
      link: '/services#tech-solutions',
    },
    {
      title: 'Portfolio',
      description: 'Explore our gallery of completed projects and satisfied clients',
      icon: <CollectionsIcon sx={{ fontSize: 40 }} />,
      link: '/gallery',
    },
  ];

  return (
    <Box sx={{ width: '100%', maxWidth: '100%', overflow: 'hidden' }}>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'primary.main',
          color: 'white',
          py: { xs: 8, md: 12 },
          minHeight: '70vh',
          display: 'flex',
          alignItems: 'center',
          width: '100%',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            bgcolor: 'primary.main',
            width: '100vw',
            ml: '50%',
            transform: 'translateX(-50%)',
            zIndex: 0,
          }
        }}
      >
        <Container maxWidth={false} sx={{ position: 'relative', zIndex: 1, px: { xs: 2, sm: 4, md: 6, lg: 8 } }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', md: '3.5rem' },
              mb: 2,
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            Transform Your Vision Into Reality
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontSize: { xs: '1.5rem', md: '2rem' },
              mb: 4,
              fontWeight: 'normal',
              textAlign: 'center',
            }}
          >
            Professional graphic design and tech solutions for your business
          </Typography>
          <Box
            sx={{
              display: 'flex',
              gap: 2,
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <Button
              variant="contained"
              color="secondary"
              size="large"
              onClick={() => navigate('/services')}
            >
              View Services
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              size="large"
              onClick={() => navigate('/contact')}
            >
              Contact Us
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Services Overview */}
      <Container maxWidth={false} sx={{ py: 8, px: { xs: 2, sm: 4, md: 6, lg: 8 } }}>
        <Typography
          variant="h2"
          textAlign="center"
          sx={{ mb: 6 }}
        >
          Our Services
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {services.map((service) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={service.title}>
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
                  {service.icon}
                </Box>
                <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h3"
                    sx={{ mb: 2 }}
                  >
                    {service.title}
                  </Typography>
                  <Typography color="text.secondary" sx={{ mb: 2 }}>
                    {service.description}
                  </Typography>
                  <Button
                    variant="outlined"
                    color="primary"
                    onClick={() => navigate(service.link)}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Call to Action */}
      <Box
        sx={{
          bgcolor: 'secondary.main',
          color: 'white',
          py: 8,
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            bgcolor: 'secondary.main',
            width: '100vw',
            ml: '50%',
            transform: 'translateX(-50%)',
            zIndex: 0,
          }
        }}
      >
        <Container maxWidth={false} sx={{ position: 'relative', zIndex: 1, px: { xs: 2, sm: 4, md: 6, lg: 8 } }}>
          <Typography variant="h3" sx={{ mb: 3, textAlign: 'center' }}>
            Ready to Start Your Project?
          </Typography>
          <Typography variant="h6" sx={{ mb: 4, textAlign: 'center' }}>
            Let's bring your vision to life with our expert design and tech solutions
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={() => navigate('/contact')}
              sx={{ px: 4 }}
            >
              Get Started
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Home;
