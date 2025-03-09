import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider, CssBaseline } from '@mui/material'
import { Provider } from 'react-redux'
import theme from './styles/theme'
import Layout from './components/Layout'
import AppRoutes from './routes'
import store from './store'
import { AuthProvider } from './context/AuthContext'

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AuthProvider>
          <Router>
            <Layout>
              <AppRoutes />
            </Layout>
          </Router>
        </AuthProvider>
      </ThemeProvider>
    </Provider>
  )
}

export default App
