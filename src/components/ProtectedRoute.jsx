import { Navigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const ProtectedRoute = ({ children }) => {
  const { user, loading } = useAuth();

  // Show nothing while checking authentication
  if (loading) return null;

  // If not authenticated, redirect to login
  if (!user || user.email !== 'izoragraphics@gmail.com') {
    return <Navigate to="/admin/login" />;
  }

  // If authenticated and is admin, show the protected content
  return children;
};

export default ProtectedRoute;
