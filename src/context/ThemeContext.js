import { createContext, useContext } from 'react';

// Crear el contexto con valores predeterminados
export const ThemeContext = createContext({
  theme: 'light',
  isDark: false,
  toggleTheme: () => {}
});

// Hook personalizado para usar el contexto
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme debe ser utilizado dentro de un ThemeProvider');
  }
  return context;
};