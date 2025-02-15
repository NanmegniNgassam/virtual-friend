import { createTheme, Theme, ThemeProvider } from '@mui/material';
import { useEffect } from 'react';
import { createBrowserRouter, Outlet, RouterProvider, useLocation } from 'react-router-dom';
import Home from './pages/home';
import Settings from './pages/settings';
import Header from './components/Header';


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
      main: '#1088E5',
      light: '#2893e6',
      dark: '#0e62d6',
      contrastText: '#f2f2f2'
    },
    secondary: {
      main: '#d1d1d1',
      light: '#f2f2f2',
      dark: '#a2a2a2',
      contrastText: '#232326'
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
    <div>
      <Header />
      <Outlet />
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
        path: '/settings',
        element: <Settings />,
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
