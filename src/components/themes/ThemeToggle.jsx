import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useTheme } from '../../state/useTheme';
import { lightTheme, darkTheme } from './Theme';
import { GlobalStyles } from './Global';

function ThemeToggle() {

  const [theme, toggleTheme, componentMounted] = useTheme();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if(!componentMounted) {
    return <div />;
  }

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <button theme={theme} toggleTheme={toggleTheme}>Change Theme</button>
      </>
    </ThemeProvider>
  );
}

export default ThemeToggle;
