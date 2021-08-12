/* eslint-disable max-len */
import React from 'react';
import { useAvailableThemes, useSetSelectedTheme, useAvailableAPIs, useSetSelectedApi } from '../../state/CharacterProvider';

const ThemeToggle = () => {
  const availableThemes = useAvailableThemes();
  const setSelectedTheme = useSetSelectedTheme();
  const availableApis = useAvailableAPIs();
  

  const handleChange = ({ target }) => setSelectedTheme(target.value);

  return (
    <ul>
      {availableApis.map((api) => (
        <li key={api}>
          <label>{api}</label>
          <input type="radio" name="theme" value={theme} onChange={handleChange} />
        </li>
      ))}
    </ul>
  );
};

export default ThemeToggle;
