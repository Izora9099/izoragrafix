import { Container, Typography, Box, Grid, Paper, Rating, Avatar } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: 'John Smith',
      role: 'Business Owner',
      rating: 5,
      comment: 'Exceptional graphic design work! The team at Izoragrafix transformed our brand identity with their creative expertise. Highly recommended for any business looking to stand out.',
      avatar: 'https://via.placeholder.com/60',
      service: 'Graphic Design',
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      role: 'Marketing Director',
      rating: 5,
      comment: 'Professional, responsive, and incredibly talented. They helped us develop a complete marketing package that perfectly represents our brand. The results exceeded our expectations.',
      avatar: 'https://via.placeholder.com/60',
      service: 'Marketing Materials',
    },
    {
      id: 3,
      name: 'Michael Chen',
      role: 'Tech Startup Founder',
      rating: 5,
      comment: 'Outstanding tech support and consultation. They helped us set up our entire office network infrastructure and continue to provide excellent maintenance service.',
      avatar: 'https://via.placeholder.com/60',
      service: 'Tech Solutions',
    },
    {
      id: 4,
      name: 'Emily Brown',
      role: 'Restaurant Owner',
      rating: 5,
      comment: 'The team designed beautiful menus and promotional materials for our restaurant. Their attention to detail and quick turnaround time was impressive.',
      avatar: 'https://via.placeholder.com/60',
      service: 'Print Design',
    },
    {
      id: 5,
      name: 'David Wilson',
      role: 'E-commerce Manager',
      rating: 5,
      comment: 'Excellent web development services. They created a user-friendly e-commerce platform that has significantly improved our online sales.',
      avatar: 'https://via.placeholder.com/60',
      service: 'Web Development',
    },
    {
      id: 6,
      name: 'Lisa Anderson',
      role: 'Creative Director',
      rating: 5,
      comment: 'Their creative vision and technical expertise are unmatched. They consistently deliver high-quality work that meets our demanding standards.',
      avatar: 'https://via.placeholder.com/60',
      service: 'Design Services',
    },
  ];

  const stats = [
    { label: 'Happy Clients', value: '100+' },
    { label: 'Projects Completed', value: '500+' },
    { label: 'Years Experience', value: '5+' },
    { label: 'Awards Won', value: '15+' },
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
            Client Reviews
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
            See what our clients say about our services and solutions
          </Typography>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box
        sx={{
          position: 'relative',
          bgcolor: 'background.paper',
          py: 4,
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
          <Grid container spacing={4} justifyContent="center">
            {stats.map((stat, index) => (
              <Grid item xs={6} sm={3} key={index}>
                <Box
                  sx={{
                    textAlign: 'center',
                    p: 2,
                  }}
                >
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 'bold',
                      color: 'primary.main',
                      mb: 1,
                      fontSize: { xs: '2rem', md: '2.5rem' }
                    }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      color: 'text.secondary',
                      fontSize: { xs: '1rem', md: '1.25rem' }
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Reviews Grid */}
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
            {reviews.map((review) => (
              <Grid item xs={12} sm={6} md={4} key={review.id}>
                <Paper
                  elevation={3}
                  sx={{
                    p: 4,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    transition: '0.3s',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: 6,
                    },
                  }}
                >
                  <FormatQuoteIcon
                    sx={{
                      position: 'absolute',
                      top: 16,
                      right: 16,
                      color: 'primary.main',
                      opacity: 0.2,
                      fontSize: 40,
                    }}
                  />
                  <Box sx={{ mb: 2 }}>
                    <Rating value={review.rating} readOnly />
                  </Box>
                  <Typography
                    variant="body1"
                    sx={{
                      mb: 3,
                      fontStyle: 'italic',
                      flex: 1,
                    }}
                  >
                    "{review.comment}"
                  </Typography>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Avatar src={review.avatar} alt={review.name} />
                    <Box>
                      <Typography variant="subtitle1" fontWeight="bold">
                        {review.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {review.role}
                      </Typography>
                      <Typography variant="caption" color="primary">
                        {review.service}
                      </Typography>
                    </Box>
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

export default Reviews;
