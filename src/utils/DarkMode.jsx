import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({

        palette: {
            primary: {
              main: '#5c6bc0',
            },
            secondary: {
              main: '#3949ab',
            },
        }
  }
);

function Darkmode({children}) {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

export default Darkmode;
