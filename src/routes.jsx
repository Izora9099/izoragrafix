import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import NotFound from './pages/NotFound';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/services" element={<Services />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/reviews" element={<Reviews />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/admin/*" element={<Admin />} />
      <Route path="/404" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  );
};

export default AppRoutes;
