import { Container, Typography, Box, Grid, Paper } from '@mui/material';
import BrushIcon from '@mui/icons-material/Brush';
import ComputerIcon from '@mui/icons-material/Computer';
import BuildIcon from '@mui/icons-material/Build';
import StorageIcon from '@mui/icons-material/Storage';
import SecurityIcon from '@mui/icons-material/Security';
import WebIcon from '@mui/icons-material/Web';

const Services = () => {
  const services = [
    {
      id: 'graphic-design',
      title: 'Graphic Design',
      description: 'Professional designs for all your visual needs, from logos to marketing materials.',
      icon: <BrushIcon sx={{ fontSize: 48 }} />,
      details: [
        'Logo Design & Branding',
        'Print Materials (Flyers, Posters, Business Cards)',
        'Social Media Graphics',
        'Digital Artwork',
      ],
    },
    {
      id: 'tech-solutions',
      title: 'Tech Solutions',
      description: 'Comprehensive tech services to keep your systems running smoothly.',
      icon: <ComputerIcon sx={{ fontSize: 48 }} />,
      details: [
        'Hardware Sales & Support',
        'Software Installation',
        'System Maintenance',
        'Tech Consulting',
      ],
    },
    {
      id: 'repair-services',
      title: 'Repair Services',
      description: 'Expert repair services for your devices and equipment.',
      icon: <BuildIcon sx={{ fontSize: 48 }} />,
      details: [
        'Computer Repair',
        'Laptop Repair',
        'Printer Repair',
        'Network Equipment Repair',
      ],
    },
    {
      id: 'data-services',
      title: 'Data Services',
      description: 'Secure and reliable data management solutions.',
      icon: <StorageIcon sx={{ fontSize: 48 }} />,
      details: [
        'Data Recovery',
        'Data Backup Solutions',
        'Cloud Storage Setup',
        'Data Migration',
      ],
    },
    {
      id: 'security',
      title: 'Security Solutions',
      description: 'Protect your digital assets with our security services.',
      icon: <SecurityIcon sx={{ fontSize: 48 }} />,
      details: [
        'Antivirus Installation',
        'Network Security',
        'Security Audits',
        'Malware Removal',
      ],
    },
    {
      id: 'web-services',
      title: 'Web Services',
      description: 'Establish your online presence with our web solutions.',
      icon: <WebIcon sx={{ fontSize: 48 }} />,
      details: [
        'Website Design',
        'Web Hosting',
        'Domain Registration',
        'Website Maintenance',
      ],
    },
  ];

  return (
    <Box sx={{ width: '100%' }}>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          bgcolor: 'primary.main',
          color: 'primary.contrastText',
          py: { xs: 6, md: 8 },
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
        <Container maxWidth={false} sx={{ position: 'relative', zIndex: 1 }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '2.5rem', md: '3.75rem' },
              fontWeight: 'bold',
              mb: 2,
              textAlign: 'center'
            }}
          >
            Our Services
          </Typography>
          <Typography
            variant="h5"
            sx={{
              mb: 4,
              textAlign: 'center',
              maxWidth: '800px',
              mx: 'auto'
            }}
          >
            Comprehensive graphic design and tech solutions for all your needs
          </Typography>
        </Container>
      </Box>

      {/* Services Grid */}
      <Box
        sx={{
          position: 'relative',
          bgcolor: 'background.paper',
          py: { xs: 6, md: 8 },
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
          <Grid container spacing={4}>
            {services.map((service) => (
              <Grid item xs={12} sm={6} md={4} key={service.id}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
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
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                      mb: 3,
                      color: 'primary.main',
                    }}
                  >
                    {service.icon}
                    <Typography variant="h5" component="h2">
                      {service.title}
                    </Typography>
                  </Box>
                  <Typography color="text.secondary" sx={{ mb: 3 }}>
                    {service.description}
                  </Typography>
                  <Box sx={{ mt: 'auto' }}>
                    <Typography variant="h6" gutterBottom>
                      What we offer:
                    </Typography>
                    <ul style={{ paddingLeft: '1.5rem', margin: 0 }}>
                      {service.details.map((detail, index) => (
                        <li key={index}>
                          <Typography>{detail}</Typography>
                        </li>
                      ))}
                    </ul>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Services;
