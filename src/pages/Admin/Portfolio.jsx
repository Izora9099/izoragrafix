import { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Grid,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  IconButton,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import ImageIcon from '@mui/icons-material/Image';
import AdminLayout from '../../components/AdminLayout/AdminLayout';

const AdminPortfolio = () => {
  const [portfolio, setPortfolio] = useState([
    {
      id: 1,
      title: 'Brand Identity Design',
      client: 'Tech Solutions Inc.',
      category: 'Graphic Design',
      description: 'Complete brand identity including logo, business cards, and letterhead.',
      image: 'https://via.placeholder.com/400x300',
      date: '2025-03-07',
    },
    {
      id: 2,
      title: 'Website Redesign',
      client: 'Fashion Boutique',
      category: 'Web Development',
      description: 'Modern e-commerce website with custom product catalog.',
      image: 'https://via.placeholder.com/400x300',
      date: '2025-03-06',
    },
  ]);

  const [dialogOpen, setDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    client: '',
    category: '',
    description: '',
    image: '',
  });

  const categories = [
    'Graphic Design',
    'Web Development',
    'Print Design',
    'Brand Identity',
    'UI/UX Design',
    'Marketing Materials',
  ];

  const handleAddItem = () => {
    setSelectedItem(null);
    setFormData({
      title: '',
      client: '',
      category: '',
      description: '',
      image: '',
    });
    setDialogOpen(true);
  };

  const handleEditItem = (item) => {
    setSelectedItem(item);
    setFormData({
      title: item.title,
      client: item.client,
      category: item.category,
      description: item.description,
      image: item.image,
    });
    setDialogOpen(true);
  };

  const handleDeleteClick = (item) => {
    setSelectedItem(item);
    setDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = () => {
    setPortfolio(prev => prev.filter(item => item.id !== selectedItem.id));
    setDeleteDialogOpen(false);
    setSelectedItem(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    if (selectedItem) {
      // Edit existing item
      setPortfolio(prev => prev.map(item =>
        item.id === selectedItem.id
          ? { ...item, ...formData }
          : item
      ));
    } else {
      // Add new item
      const newItem = {
        ...formData,
        id: Math.max(...portfolio.map(i => i.id)) + 1,
        date: new Date().toISOString().split('T')[0],
      };
      setPortfolio(prev => [...prev, newItem]);
    }
    setDialogOpen(false);
  };

  return (
    <AdminLayout>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h4">Manage Portfolio</Typography>
          <Button
            variant="contained"
            onClick={handleAddItem}
          >
            Add New Project
          </Button>
        </Box>

        <Grid container spacing={3}>
          {portfolio.map((item) => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Card>
                <CardMedia
                  component="img"
                  height="200"
                  image={item.image}
                  alt={item.title}
                />
                <CardContent>
                  <Typography variant="h6" noWrap>{item.title}</Typography>
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    {item.client}
                  </Typography>
                  <Typography variant="body2" color="primary">
                    {item.category}
                  </Typography>
                  <Typography variant="body2" sx={{ mt: 1 }}>
                    {item.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <IconButton
                    size="small"
                    onClick={() => handleEditItem(item)}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    size="small"
                    onClick={() => handleDeleteClick(item)}
                    color="error"
                  >
                    <DeleteIcon />
                  </IconButton>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>

        {/* Add/Edit Dialog */}
        <Dialog
          open={dialogOpen}
          onClose={() => setDialogOpen(false)}
          maxWidth="sm"
          fullWidth
        >
          <DialogTitle>
            {selectedItem ? 'Edit Project' : 'Add New Project'}
          </DialogTitle>
          <DialogContent>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
              <TextField
                name="title"
                label="Project Title"
                value={formData.title}
                onChange={handleChange}
                fullWidth
                required
              />
              <TextField
                name="client"
                label="Client Name"
                value={formData.client}
                onChange={handleChange}
                fullWidth
                required
              />
              <FormControl fullWidth required>
                <InputLabel>Category</InputLabel>
                <Select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  label="Category"
                >
                  {categories.map((category) => (
                    <MenuItem key={category} value={category}>
                      {category}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
              <TextField
                name="description"
                label="Description"
                value={formData.description}
                onChange={handleChange}
                multiline
                rows={4}
                fullWidth
                required
              />
              <TextField
                name="image"
                label="Image URL"
                value={formData.image}
                onChange={handleChange}
                fullWidth
                required
                helperText="Enter the URL of the project image"
              />
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setDialogOpen(false)}>Cancel</Button>
            <Button
              onClick={handleSubmit}
              variant="contained"
              disabled={!formData.title || !formData.client || !formData.category || !formData.description || !formData.image}
            >
              {selectedItem ? 'Update' : 'Add'}
            </Button>
          </DialogActions>
        </Dialog>

        {/* Delete Confirmation Dialog */}
        <Dialog
          open={deleteDialogOpen}
          onClose={() => setDeleteDialogOpen(false)}
        >
          <DialogTitle>Delete Project</DialogTitle>
          <DialogContent>
            Are you sure you want to delete "{selectedItem?.title}"?
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setDeleteDialogOpen(false)}>Cancel</Button>
            <Button onClick={handleDeleteConfirm} color="error">
              Delete
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </AdminLayout>
  );
};

export default AdminPortfolio;
