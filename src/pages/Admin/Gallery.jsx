import { useState } from 'react';
import {
  Box,
  Typography,
  Grid,
  Card,
  CardMedia,
  CardActions,
  IconButton,
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
  ImageList,
  ImageListItem,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import AdminLayout from '../../components/AdminLayout/AdminLayout';

const AdminGallery = () => {
  const [gallery, setGallery] = useState([
    {
      id: 1,
      title: 'Logo Design',
      category: 'Graphic Design',
      image: 'https://via.placeholder.com/400x300',
      description: 'Modern logo design for tech company',
    },
    {
      id: 2,
      title: 'Website UI',
      category: 'Web Design',
      image: 'https://via.placeholder.com/400x300',
      description: 'E-commerce website interface',
    },
    {
      id: 3,
      title: 'Business Cards',
      category: 'Print Design',
      image: 'https://via.placeholder.com/400x300',
      description: 'Corporate business card designs',
    },
  ]);

  const [dialogOpen, setDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    image: '',
    description: '',
  });

  const categories = [
    'Graphic Design',
    'Web Design',
    'Print Design',
    'Brand Identity',
    'UI/UX Design',
    'Marketing Materials',
  ];

  const handleAddImage = () => {
    setSelectedImage(null);
    setFormData({
      title: '',
      category: '',
      image: '',
      description: '',
    });
    setDialogOpen(true);
  };

  const handleEditImage = (image) => {
    setSelectedImage(image);
    setFormData({
      title: image.title,
      category: image.category,
      image: image.image,
      description: image.description,
    });
    setDialogOpen(true);
  };

  const handleDeleteClick = (image) => {
    setSelectedImage(image);
    setDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = () => {
    setGallery(prev => prev.filter(img => img.id !== selectedImage.id));
    setDeleteDialogOpen(false);
    setSelectedImage(null);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    if (selectedImage) {
      // Edit existing image
      setGallery(prev => prev.map(img =>
        img.id === selectedImage.id
          ? { ...img, ...formData }
          : img
      ));
    } else {
      // Add new image
      const newImage = {
        ...formData,
        id: Math.max(...gallery.map(img => img.id)) + 1,
      };
      setGallery(prev => [...prev, newImage]);
    }
    setDialogOpen(false);
  };

  return (
    <AdminLayout>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h4">Manage Gallery</Typography>
          <Button
            variant="contained"
            startIcon={<AddPhotoAlternateIcon />}
            onClick={handleAddImage}
          >
            Add New Image
          </Button>
        </Box>

        <ImageList variant="masonry" cols={3} gap={16}>
          {gallery.map((item) => (
            <ImageListItem key={item.id}>
              <Card>
                <CardMedia
                  component="img"
                  image={item.image}
                  alt={item.title}
                  sx={{
                    height: 'auto',
                    aspectRatio: '4/3',
                  }}
                />
                <Box sx={{ p: 2 }}>
                  <Typography variant="subtitle1" noWrap>{item.title}</Typography>
                  <Typography variant="body2" color="primary">
                    {item.category}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                    {item.description}
                  </Typography>
                </Box>
                <CardActions>
                  <IconButton
                    size="small"
                    onClick={() => handleEditImage(item)}
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
            </ImageListItem>
          ))}
        </ImageList>

        {/* Add/Edit Dialog */}
        <Dialog
          open={dialogOpen}
          onClose={() => setDialogOpen(false)}
          maxWidth="sm"
          fullWidth
        >
          <DialogTitle>
            {selectedImage ? 'Edit Image' : 'Add New Image'}
          </DialogTitle>
          <DialogContent>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 2 }}>
              <TextField
                name="title"
                label="Image Title"
                value={formData.title}
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
                rows={3}
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
                helperText="Enter the URL of the image"
              />
            </Box>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setDialogOpen(false)}>Cancel</Button>
            <Button
              onClick={handleSubmit}
              variant="contained"
              disabled={!formData.title || !formData.category || !formData.image}
            >
              {selectedImage ? 'Update' : 'Add'}
            </Button>
          </DialogActions>
        </Dialog>

        {/* Delete Confirmation Dialog */}
        <Dialog
          open={deleteDialogOpen}
          onClose={() => setDeleteDialogOpen(false)}
        >
          <DialogTitle>Delete Image</DialogTitle>
          <DialogContent>
            Are you sure you want to delete "{selectedImage?.title}"?
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

export default AdminGallery;
