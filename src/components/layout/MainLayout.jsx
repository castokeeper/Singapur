import React from 'react';
import { useTheme } from '../../context/ThemeContext';

const MainLayout = ({ children }) => {
  const { theme } = useTheme();
  
  return (
    <div className={`main-container ${theme}`}>
      {children}
    </div>
  );
};

export default MainLayout;