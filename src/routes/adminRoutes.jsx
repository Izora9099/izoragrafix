import { Routes, Route, Navigate } from 'react-router-dom';
import Admin from '../pages/Admin/Admin';
import AdminReviews from '../pages/Admin/Reviews';
import AdminPortfolio from '../pages/Admin/Portfolio';
import AdminGallery from '../pages/Admin/Gallery';
import ProtectedRoute from '../components/ProtectedRoute/ProtectedRoute';

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={
        <ProtectedRoute>
          <Admin />
        </ProtectedRoute>
      } />
      <Route path="/reviews" element={
        <ProtectedRoute>
          <AdminReviews />
        </ProtectedRoute>
      } />
      <Route path="/portfolio" element={
        <ProtectedRoute>
          <AdminPortfolio />
        </ProtectedRoute>
      } />
      <Route path="/gallery" element={
        <ProtectedRoute>
          <AdminGallery />
        </ProtectedRoute>
      } />
      <Route path="*" element={<Navigate to="/admin" replace />} />
    </Routes>
  );
};

export default AdminRoutes;
