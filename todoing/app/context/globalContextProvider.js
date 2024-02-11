'use client';
import React, { createContext, useState } from 'react';
import themes from './themes';

const GlobalContext = createContext();
const GlobalUpdateContext = createContext();

export const GlobalProvider = () => {
  const [selectedTheme, setSelectedTheme] = useState(0);
  const theme = themes[selectedTheme];

  return (
    <GlobalContext.Provider
      value={{
        theme,
      }}
    >
      <GlobalUpdateContext.Provider>{children}</GlobalUpdateContext.Provider>
    </GlobalContext.Provider>
  );
};
