import { useState } from 'react';
import { Container, Typography, Box, Grid, Paper, Rating, Avatar, Button, IconButton, Menu, MenuItem } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import AddIcon from '@mui/icons-material/Add';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ReviewDialog from '../../components/ReviewDialog/ReviewDialog';

const Reviews = () => {
  const [reviews, setReviews] = useState([
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
  ]);

  const stats = [
    { label: 'Happy Clients', value: '100+' },
    { label: 'Projects Completed', value: '500+' },
    { label: 'Years Experience', value: '5+' },
    { label: 'Awards Won', value: '15+' },
  ];

  // CRUD State
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedReview, setSelectedReview] = useState(null);
  const [menuAnchor, setMenuAnchor] = useState(null);
  const [activeReviewId, setActiveReviewId] = useState(null);

  // CRUD Handlers
  const handleAddReview = () => {
    setSelectedReview(null);
    setDialogOpen(true);
  };

  const handleEditReview = (review) => {
    setSelectedReview(review);
    setDialogOpen(true);
    handleCloseMenu();
  };

  const handleDeleteReview = () => {
    setReviews(prev => prev.filter(review => review.id !== activeReviewId));
    handleCloseMenu();
  };

  const handleSubmitReview = (formData) => {
    if (selectedReview) {
      // Edit existing review
      setReviews(prev => prev.map(review =>
        review.id === selectedReview.id
          ? { ...review, ...formData }
          : review
      ));
    } else {
      // Add new review
      const newReview = {
        ...formData,
        id: Math.max(...reviews.map(r => r.id)) + 1,
        avatar: 'https://via.placeholder.com/60',
      };
      setReviews(prev => [...prev, newReview]);
    }
  };

  const handleOpenMenu = (event, reviewId) => {
    setMenuAnchor(event.currentTarget);
    setActiveReviewId(reviewId);
  };

  const handleCloseMenu = () => {
    setMenuAnchor(null);
    setActiveReviewId(null);
  };

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
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 4 }}>
            <Button
              variant="contained"
              startIcon={<AddIcon />}
              onClick={handleAddReview}
            >
              Add Review
            </Button>
          </Box>

          <Grid container spacing={4}>
            {reviews.map((review) => (
              <Grid item xs={12} md={6} lg={4} key={review.id}>
                <Paper
                  elevation={2}
                  sx={{
                    p: 3,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                  }}
                >
                  <IconButton
                    size="small"
                    sx={{ position: 'absolute', top: 8, right: 8 }}
                    onClick={(e) => handleOpenMenu(e, review.id)}
                  >
                    <MoreVertIcon />
                  </IconButton>

                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <Avatar src={review.avatar} alt={review.name} sx={{ width: 60, height: 60, mr: 2 }} />
                    <Box>
                      <Typography variant="h6" gutterBottom>
                        {review.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {review.role}
                      </Typography>
                    </Box>
                  </Box>

                  <Rating value={review.rating} readOnly precision={0.5} sx={{ mb: 2 }} />

                  <Typography
                    variant="body1"
                    sx={{
                      mb: 2,
                      flex: 1,
                      position: 'relative',
                      pl: 4,
                    }}
                  >
                    <FormatQuoteIcon
                      sx={{
                        position: 'absolute',
                        left: 0,
                        top: -8,
                        color: 'primary.main',
                        opacity: 0.3,
                      }}
                    />
                    {review.comment}
                  </Typography>

                  <Typography variant="body2" color="primary.main" sx={{ mt: 'auto' }}>
                    {review.service}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Review Menu */}
      <Menu
        anchorEl={menuAnchor}
        open={Boolean(menuAnchor)}
        onClose={handleCloseMenu}
      >
        <MenuItem onClick={() => handleEditReview(reviews.find(r => r.id === activeReviewId))}>
          Edit
        </MenuItem>
        <MenuItem onClick={handleDeleteReview} sx={{ color: 'error.main' }}>
          Delete
        </MenuItem>
      </Menu>

      {/* Review Dialog */}
      <ReviewDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        onSubmit={handleSubmitReview}
        initialData={selectedReview}
      />
    </Box>
  );
};

export default Reviews;
