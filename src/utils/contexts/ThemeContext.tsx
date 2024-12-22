import { createContext, useState } from 'react';
import  { ThemeProvider as StyledThemeProvider } from 'styled-components'

const lightTheme = {
  background: '#ffffff',
  text: '#1a1a1a',
  primary: '#2563eb',
  secondary: '#f3f4f6',
  hover: '#1d4ed8',
  card: '#f9fafb'
};

const darkTheme = {
  background: '#1a1a1a',
  text: '#ffffff',
  primary: '#3b82f6',
  secondary: '#374151',
  hover: '#60a5fa',
  card: '#1f2937'
};

const ThemeContext = createContext({
  isDarkMode: false,
  toggleTheme: () => {},
});

// Theme provider component
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export const CustomThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <StyledThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};