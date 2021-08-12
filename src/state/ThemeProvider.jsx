import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [themes, setThemes] = useState();
  const [selectedTheme, setSelectedTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{ themes, setSelectedTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};



export const useThemes = () => {
  const { themes } = useContext(ThemeContext);
  return themes;
};

export const useSetSelectedTheme = () => {
  const { setSelectedTheme} = useContext(ThemeContext);
  return setSelectedTheme;
};