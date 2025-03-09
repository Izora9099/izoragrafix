# Izoragrafix Website

A modern React.js website for Izoragrafix, a startup offering graphic design services and tech solutions.

## Features

- Modern, responsive design using Material-UI
- Interactive service showcase
- Portfolio/Gallery section
- Customer reviews system
- Admin dashboard for content management
- Contact form with WhatsApp integration

## Project Structure

```
izoragrafix/
├── src/
│   ├── components/      # Reusable UI components
│   ├── pages/          # Page components
│   ├── store/          # Redux store and slices
│   ├── styles/         # Theme and global styles
│   ├── utils/          # Utility functions
│   ├── services/       # API services
│   ├── assets/         # Static assets
│   └── App.jsx         # Main application component
```

## Tech Stack

- React 18+
- Vite (Build tool)
- Material-UI (UI Framework)
- Redux Toolkit (State Management)
- React Router (Navigation)
- Formik + Yup (Form Management)

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Development Status

Current implementation includes:
- Basic project structure
- Navigation and routing setup
- Homepage with hero section and service overview
- Theme configuration
- Redux store setup

Next steps:
- Implement remaining pages (Services, Gallery, Reviews, Contact)
- Set up admin dashboard
- Add authentication
- Integrate with backend services

## Contributing

1. Create a feature branch
2. Make your changes
3. Submit a pull request

## License

MIT License
