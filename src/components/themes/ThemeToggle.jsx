import React from 'react';
import { ThemeContext, ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './Theme';
import { GlobalStyles } from './Global';

function ThemeToggle() {
  return (
    <ThemeProvider theme={lightTheme}>
      <>
        <GlobalStyles />
        <button>Toggle Theme</button>
      </>
    </ThemeProvider>
  );
}

export default ThemeToggle;
