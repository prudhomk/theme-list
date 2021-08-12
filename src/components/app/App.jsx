import React from 'react';
import CharacterList from '../characters/CharacterList';
import ThemeToggle from '../themes/ThemeToggle';


export default function App() {
  return (
    <>
      <ThemeToggle />
      <CharacterList />
    </>
  );
}
