import React, { createContext, useState, useContext } from 'react';

// Create a context for managing the background color
const ColorContext = createContext();

export const useColor = () => {
  return useContext(ColorContext);
};

// Create a provider component that wraps the app and provides the color state
export const ColorProvider = ({ children }) => {
  const [bgColor, setBgColor] = useState('#FFFFFF'); // Default background color is white

  const changeBackground = (color) => {
    setBgColor(color);
  };

  return (
    <ColorContext.Provider value={{ bgColor, changeBackground }}>
      {children}
    </ColorContext.Provider>
  );
};
