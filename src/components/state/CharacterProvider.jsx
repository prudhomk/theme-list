import React, { createContext, useContext, useEffect, useState} from 'react';
import { fetchFuturamaCharacters } from '../services/futuramaApi';

const CharacterContext = createContext();

export const CharacterProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [selectedApi, setSelectedApi] = useState('futurama');

  const apiMap = {
    futurama: fetchFuturamaCharacters,
  };
}