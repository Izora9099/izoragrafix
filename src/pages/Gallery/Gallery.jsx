import { Container, Typography, Box, Grid, Card, CardMedia, CardContent, IconButton, Tabs, Tab } from '@mui/material';
import ZoomInIcon from '@mui/icons-material/ZoomIn';
import { useState } from 'react';

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Work', description: 'Explore our complete portfolio of design and tech solutions' },
    { id: 'graphic-design', name: 'Graphic Design', description: 'Creative designs that bring your brand to life' },
    { id: 'tech', name: 'Tech Solutions', description: 'Innovative technical solutions for modern businesses' },
    { id: 'web', name: 'Web Projects', description: 'Beautiful and functional web experiences' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Modern Logo Design',
      category: 'graphic-design',
      description: 'Brand identity design for a tech startup',
      imageUrl: 'https://via.placeholder.com/400x300',
      details: ['Brand Guidelines', 'Logo Variations', 'Color Palette', 'Typography'],
    },
    {
      id: 2,
      title: 'E-commerce Website',
      category: 'web',
      description: 'Full-stack e-commerce solution',
      imageUrl: 'https://via.placeholder.com/400x300',
      details: ['Responsive Design', 'Payment Integration', 'Product Management', 'Analytics'],
    },
    {
      id: 3,
      title: 'Marketing Campaign',
      category: 'graphic-design',
      description: 'Social media marketing materials',
      imageUrl: 'https://via.placeholder.com/400x300',
      details: ['Social Media Posts', 'Banner Ads', 'Email Templates', 'Print Materials'],
    },
    {
      id: 4,
      title: 'Network Setup',
      category: 'tech',
      description: 'Corporate network infrastructure',
      imageUrl: 'https://via.placeholder.com/400x300',
      details: ['Network Design', 'Security Implementation', 'Hardware Setup', 'Maintenance Plan'],
    },
    {
      id: 5,
      title: 'Business Cards',
      category: 'graphic-design',
      description: 'Custom business card design',
      imageUrl: 'https://via.placeholder.com/400x300',
      details: ['Premium Paper', 'Foil Stamping', 'Custom Die-Cut', 'Multiple Variations'],
    },
    {
      id: 6,
      title: 'Portfolio Website',
      category: 'web',
      description: 'Artist portfolio showcase',
      imageUrl: 'https://via.placeholder.com/400x300',
      details: ['Gallery Layout', 'Animation Effects', 'Contact Form', 'SEO Optimization'],
    },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  const currentCategory = categories.find(cat => cat.id === selectedCategory);

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
            {currentCategory.name}
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
            {currentCategory.description}
          </Typography>
        </Container>
      </Box>

      {/* Category Tabs */}
      <Box
        sx={{
          position: 'relative',
          bgcolor: 'background.paper',
          borderBottom: 1,
          borderColor: 'divider',
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
          <Tabs
            value={selectedCategory}
            onChange={(e, newValue) => setSelectedCategory(newValue)}
            variant="fullWidth"
            sx={{
              '& .MuiTab-root': {
                fontSize: { xs: '0.875rem', md: '1rem' },
                py: 2,
              }
            }}
          >
            {categories.map((category) => (
              <Tab
                key={category.id}
                value={category.id}
                label={category.name}
                sx={{
                  fontWeight: selectedCategory === category.id ? 'bold' : 'normal',
                }}
              />
            ))}
          </Tabs>
        </Container>
      </Box>

      {/* Gallery Grid */}
      <Box
        sx={{
          position: 'relative',
          bgcolor: 'background.paper',
          py: { xs: 6, md: 8 },
          minHeight: '80vh',
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
            {filteredProjects.map((project) => (
              <Grid item xs={12} sm={6} md={4} key={project.id}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: '0.3s',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: 6,
                      '& .zoom-icon': {
                        opacity: 1,
                      },
                    },
                  }}
                >
                  <Box sx={{ position: 'relative' }}>
                    <CardMedia
                      component="img"
                      height="300"
                      image={project.imageUrl}
                      alt={project.title}
                    />
                    <IconButton
                      className="zoom-icon"
                      sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        bgcolor: 'rgba(0, 0, 0, 0.5)',
                        color: 'white',
                        opacity: 0,
                        transition: '0.3s',
                        '&:hover': {
                          bgcolor: 'rgba(0, 0, 0, 0.7)',
                        },
                      }}
                    >
                      <ZoomInIcon />
                    </IconButton>
                  </Box>
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography variant="h6" gutterBottom>
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" paragraph>
                      {project.description}
                    </Typography>
                    <Box component="ul" sx={{ pl: 2, mt: 2 }}>
                      {project.details.map((detail, index) => (
                        <Typography
                          component="li"
                          variant="body2"
                          color="text.secondary"
                          key={index}
                        >
                          {detail}
                        </Typography>
                      ))}
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default Gallery;
