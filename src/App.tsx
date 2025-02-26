import { createTheme, Theme, ThemeProvider } from '@mui/material';
import { useEffect } from 'react';
import { createBrowserRouter, Outlet, RouterProvider, useLocation } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/home';


declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    // Remove classic breakpoints labels
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    // Set the new breakpoints labels
    mobile: true;
    tablet: true;
    laptop: true;
    desktop: true;
    projector: true;
  }
}

const theme: Theme = createTheme({
  breakpoints: {
    // Use the refined breakpoints points
    values: {
      mobile: 0,
      tablet: 600,
      laptop: 900,
      desktop: 1200,
      projector: 1536
    }
  },
  palette: {
    mode: 'light',
    common: {
      black: '#232326',
      white: '#ffffff',
    },
    primary: {
      main: '#749C3C',
      light: '#96B16A',
      dark: '#78883C',
      contrastText: '#f2f2f2'
    },
    secondary: {
      main: '#2977BD',
      light: '#78A8D4',
      dark: '#014e92',
      contrastText: '#f2f2f2'
    }
  }
});

const AppLayout = () => {
  // Extracts pathname property(key) from an object
  const { pathname } = useLocation();

  // Automatically scrolls to top whenever pathname changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className='app-layout'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '*',
        element: <Home />,
      }
    ],
  }
])

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={router} />
    </ThemeProvider>
  )
}

export default App
