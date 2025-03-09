import { useState } from 'react';
import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Rating,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AdminLayout from '../../components/AdminLayout/AdminLayout';
import ReviewDialog from '../../components/ReviewDialog/ReviewDialog';

const AdminReviews = () => {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: 'John Smith',
      role: 'Business Owner',
      rating: 5,
      comment: 'Exceptional graphic design work!',
      service: 'Graphic Design',
      date: '2025-03-09',
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      role: 'Marketing Director',
      rating: 5,
      comment: 'Professional and responsive service.',
      service: 'Marketing Materials',
      date: '2025-03-08',
    },
  ]);

  const [dialogOpen, setDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [selectedReview, setSelectedReview] = useState(null);

  const handleAddReview = () => {
    setSelectedReview(null);
    setDialogOpen(true);
  };

  const handleEditReview = (review) => {
    setSelectedReview(review);
    setDialogOpen(true);
  };

  const handleDeleteClick = (review) => {
    setSelectedReview(review);
    setDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = () => {
    setReviews(prev => prev.filter(review => review.id !== selectedReview.id));
    setDeleteDialogOpen(false);
    setSelectedReview(null);
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
        date: new Date().toISOString().split('T')[0],
      };
      setReviews(prev => [...prev, newReview]);
    }
    setDialogOpen(false);
  };

  return (
    <AdminLayout>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
          <Typography variant="h4">Manage Reviews</Typography>
          <Button
            variant="contained"
            onClick={handleAddReview}
          >
            Add New Review
          </Button>
        </Box>

        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Role</TableCell>
                <TableCell>Service</TableCell>
                <TableCell>Rating</TableCell>
                <TableCell>Comment</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {reviews.map((review) => (
                <TableRow key={review.id}>
                  <TableCell>{review.date}</TableCell>
                  <TableCell>{review.name}</TableCell>
                  <TableCell>{review.role}</TableCell>
                  <TableCell>{review.service}</TableCell>
                  <TableCell>
                    <Rating value={review.rating} readOnly size="small" />
                  </TableCell>
                  <TableCell sx={{ maxWidth: 300 }}>
                    <Typography noWrap>{review.comment}</Typography>
                  </TableCell>
                  <TableCell>
                    <IconButton
                      size="small"
                      onClick={() => handleEditReview(review)}
                    >
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      size="small"
                      onClick={() => handleDeleteClick(review)}
                      color="error"
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Review Dialog */}
        <ReviewDialog
          open={dialogOpen}
          onClose={() => setDialogOpen(false)}
          onSubmit={handleSubmitReview}
          initialData={selectedReview}
        />

        {/* Delete Confirmation Dialog */}
        <Dialog
          open={deleteDialogOpen}
          onClose={() => setDeleteDialogOpen(false)}
        >
          <DialogTitle>Delete Review</DialogTitle>
          <DialogContent>
            Are you sure you want to delete this review from {selectedReview?.name}?
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

export default AdminReviews;
