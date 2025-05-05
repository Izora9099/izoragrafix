import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { AuthProvider } from './context/auth/AuthProvider';
import { ThemeProvider } from './context/theme/themeContext.jsx';
import AppRoutes from './routes';
import Layout from './components/Layout/Layout';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <AuthProvider>
          <Router>
            <Layout>
              <AppRoutes />
            </Layout>
          </Router>
        </AuthProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
