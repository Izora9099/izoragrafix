# Izoragrafix Website

A modern React-based web platform for Izoragrafix, offering graphic design services and tech solutions with a focus on user experience and responsive design.

## Features

- 🎨 Modern, responsive UI built with Material-UI
- 🔒 Secure authentication system
- 📱 Cross-device compatibility
- 📧 Contact form with EmailJS integration
- 🔥 Firebase backend integration
- 🎯 Dynamic content management
- 🌓 Light/Dark theme support

## Tech Stack

- **Frontend**: React 18 with Vite
- **UI Framework**: Material-UI v5
- **State Management**: Redux Toolkit
- **Routing**: React Router v6
- **Form Handling**: Formik + Yup
- **Backend Services**: Firebase & Appwrite
- **Email Service**: EmailJS

## Quick Start

1. Clone and setup environment:
   ```bash
   git clone <repository-url>
   cd izoragrafix
   cp .env.example .env   # Configure your environment variables
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## Project Structure

```
izoragrafix/
├── src/
│   ├── components/     # Reusable UI components
│   ├── context/       # React context providers
│   ├── pages/         # Page components
│   ├── assets/        # Static assets
│   ├── styles/        # Theme configuration
│   └── App.jsx        # Main component
├── .env.example       # Environment variables template
├── firestore.rules    # Firebase security rules
└── storage.rules      # Firebase storage rules
```

## Development

- Run `npm run lint` to check code quality
- Use `npm run preview` to preview production build
- Follow the ESLint configuration for consistent code style

## Environment Variables

Required environment variables (see `.env.example`):
- Firebase configuration
- EmailJS credentials
- API endpoints

## License

MIT License - feel free to use and modify for your projects.
