import React from 'react';
import ThemeToggle from '../themes/ThemeToggle';
import styles from './Header.css';

export default function Header() {
  return (
    <div className={styles.Header}>
      <h1>Futurama List, now with Themes!</h1>
      <ThemeToggle />
    </div>
  );
}
