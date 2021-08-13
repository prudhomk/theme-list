import React from 'react';
import { useCharacters } from '../../state/CharacterProvider';
import Character from './Character';
import styles from './Character.css';

const CharacterList = () => {
  const characters = useCharacters();

  const characterElements = characters.map((character) => (
    <li key={characters.name}>
      <Character {...character} />
    </li>
  ));

  return <ul className={styles.Character}>{characterElements}</ul>;
};

export default CharacterList;
