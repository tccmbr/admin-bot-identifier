import { createTheme } from '@mui/material/styles';

// A custom theme for this app
const theme = createTheme({
  palette: {
    primary: {
      main: '#2C2C2C',
      dark: '#414141',
      light: '#FFF',
    },
    secondary: {
      main: '#2C2C2C',
      dark: '#414141',
      light: '#e5e5e5',
    },
    error: {
      main: '#D3455B',
    },
    text: {
      primary: '#2C2C2C',
      secondary: '#788896',
    },
    background: {
      default: '#e5e5e5',
      paper: '#2C2C2C',
    },
  },
  components: {
    MuiFilledInput: {
      styleOverrides: {
        root: {
          '&:before': {
            borderBottom: '1px solid rgba(256, 256, 256, 0.42)',
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          '&:before': {
            borderBottom: '1px solid rgba(256, 256, 256, 0.42)',
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: '#414141',
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          borderColor: 'rgba(256, 256, 256, 0.1)',
        },
      },
    },
    MuiSvgIcon: {
      styleOverrides: {
        root: {
          color: '#788896',
        },
      },
    },
    MuiButtonBase: {
      styleOverrides: {
        root: {
          '&.MuiListItemButton-root:hover': {
            backgroundColor: 'rgba(256, 256, 256, 0.04)',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          color: '#788896',
          '&.MuiAppBar-root': {
            color: '#2C2C2C',
          },
          boxShadow:
            'rgba(0, 0, 0, 0.4) 0px 15px 25px, rgba(0, 0, 0, 0.03) 0px 0px 0px 0.5px',
        },
      },
    },
  },
});

export default theme;
