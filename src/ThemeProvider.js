import React from 'react';
import { ThemeContext, buildTheme } from 'veratti-ui';

const theme = buildTheme({
  font: 'Arial, Helvetica, sans-serif',
  // prettier-ignore
  palette: {
      base:       '#30404d',
      primary:    '#000',
      secondary:  '#f55656',
      contrast:   '#F4893D',

      error:      '#df3e3e',
      text:       '#ccc'
    }
});

export default function ThemeProvider({ children }) {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}
