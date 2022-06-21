import React, { useState } from 'react';
import AppContext from '../context/AppContext';

/**
 * Provide any application specific data
 */
const AppProvider = ({ children }) => {
  const [colorScheme, setColorScheme] = useState('dark');

  const toggleColorScheme = () => {
    setColorScheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
    document.getElementById('app-html').classList.toggle('spectrum--light');
    document.getElementById('app-html').classList.toggle('spectrum--darkest');
  };

  const value = { colorScheme, setColorScheme, toggleColorScheme };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppProvider;
