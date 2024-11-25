import React, { createContext, useState } from 'react';

export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [query, setQuery] = useState('');

  return (
    <MyContext.Provider value={{ query, setQuery }}>
      {children}
    </MyContext.Provider>
  );
};
