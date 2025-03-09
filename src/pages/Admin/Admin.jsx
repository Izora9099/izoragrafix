import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  Card,
  CardContent,
  CardActions,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  IconButton,
} from '@mui/material';
import ReviewsIcon from '@mui/icons-material/Reviews';
import WorkIcon from '@mui/icons-material/Work';
import ImageIcon from '@mui/icons-material/Image';
import PeopleIcon from '@mui/icons-material/People';
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import AdminLayout from '../../components/AdminLayout/AdminLayout';

const Admin = () => {
  // Sample data - replace with actual data from backend
  const stats = {
    reviews: 24,
    portfolio: 15,
    gallery: 48,
    visitors: 1250,
  };

  const recentReviews = [
    {
      id: 1,
      name: 'John Smith',
      rating: 5,
      date: '2025-03-09',
      comment: 'Exceptional graphic design work!',
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      rating: 5,
      date: '2025-03-08',
      comment: 'Professional and responsive service.',
    },
  ];

  const recentProjects = [
    {
      id: 1,
      title: 'Brand Identity Design',
      client: 'Tech Solutions Inc.',
      date: '2025-03-07',
    },
    {
      id: 2,
      title: 'Website Redesign',
      client: 'Fashion Boutique',
      date: '2025-03-06',
    },
  ];

  return (
    <AdminLayout>
      <Box sx={{ width: '100%' }}>
        {/* Stats Cards */}
        <Grid container spacing={3} sx={{ mb: 4 }}>
          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <ReviewsIcon color="primary" sx={{ fontSize: 40, mr: 2 }} />
                  <Typography variant="h4">{stats.reviews}</Typography>
                </Box>
                <Typography variant="h6" color="text.secondary">Reviews</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" href="/admin/reviews">View All</Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <WorkIcon color="primary" sx={{ fontSize: 40, mr: 2 }} />
                  <Typography variant="h4">{stats.portfolio}</Typography>
                </Box>
                <Typography variant="h6" color="text.secondary">Portfolio Items</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" href="/admin/portfolio">View All</Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <ImageIcon color="primary" sx={{ fontSize: 40, mr: 2 }} />
                  <Typography variant="h4">{stats.gallery}</Typography>
                </Box>
                <Typography variant="h6" color="text.secondary">Gallery Images</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" href="/admin/gallery">View All</Button>
              </CardActions>
            </Card>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Card>
              <CardContent>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                  <PeopleIcon color="primary" sx={{ fontSize: 40, mr: 2 }} />
                  <Typography variant="h4">{stats.visitors}</Typography>
                </Box>
                <Typography variant="h6" color="text.secondary">Monthly Visitors</Typography>
              </CardContent>
              <CardActions>
                <Button size="small" href="/admin/analytics">View Details</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>

        {/* Recent Activity */}
        <Grid container spacing={3}>
          {/* Recent Reviews */}
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>Recent Reviews</Typography>
              <List>
                {recentReviews.map((review) => (
                  <ListItem
                    key={review.id}
                    secondaryAction={
                      <Box>
                        <IconButton edge="end" aria-label="view" href={`/admin/reviews/${review.id}`}>
                          <VisibilityIcon />
                        </IconButton>
                        <IconButton edge="end" aria-label="edit" href={`/admin/reviews/${review.id}/edit`}>
                          <EditIcon />
                        </IconButton>
                      </Box>
                    }
                  >
                    <ListItemAvatar>
                      <Avatar>{review.name[0]}</Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={review.name}
                      secondary={
                        <>
                          <Typography component="span" variant="body2" color="text.primary">
                            {review.rating}/5 stars
                          </Typography>
                          {` — ${review.comment}`}
                        </>
                      }
                    />
                  </ListItem>
                ))}
              </List>
              <Button variant="text" href="/admin/reviews" sx={{ mt: 1 }}>
                View All Reviews
              </Button>
            </Paper>
          </Grid>

          {/* Recent Projects */}
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 2 }}>
              <Typography variant="h6" gutterBottom>Recent Projects</Typography>
              <List>
                {recentProjects.map((project) => (
                  <ListItem
                    key={project.id}
                    secondaryAction={
                      <Box>
                        <IconButton edge="end" aria-label="view" href={`/admin/portfolio/${project.id}`}>
                          <VisibilityIcon />
                        </IconButton>
                        <IconButton edge="end" aria-label="edit" href={`/admin/portfolio/${project.id}/edit`}>
                          <EditIcon />
                        </IconButton>
                      </Box>
                    }
                  >
                    <ListItemAvatar>
                      <Avatar>
                        <WorkIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={project.title}
                      secondary={
                        <>
                          <Typography component="span" variant="body2" color="text.primary">
                            {project.client}
                          </Typography>
                          {` — ${project.date}`}
                        </>
                      }
                    />
                  </ListItem>
                ))}
              </List>
              <Button variant="text" href="/admin/portfolio" sx={{ mt: 1 }}>
                View All Projects
              </Button>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </AdminLayout>
  );
};

export default Admin;
