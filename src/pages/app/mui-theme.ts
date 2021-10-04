import { createTheme } from '@mui/material';

export const muiTheme = createTheme({
  palette: {
    primary: {
      light: '#ff7043',
      main: '#ff5722',
      dark: '#e64a19',
      contrastText: '#bf360c',
    },
    secondary: {
      light: '#26a69a',
      main: '#009688',
      dark: '#00695c',
      contrastText: '#004d40',
    },
    text: {
      primary: '#000',
      secondary: '#fff',
    },
  }
});
