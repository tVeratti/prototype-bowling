import React from 'react';
import { ThemeContext, buildTheme } from 'veratti-ui';

const theme = buildTheme({
  font: 'Arial, Helvetica, sans-serif',
  // prettier-ignore
  palette: {
      base:       '#363537',
      primary:    '#306bac',
      secondary:  '#0cce6b',
      contrast:   '#ef476f',

      error:      '#df3e3e',
      text:       '#ccc'
    }
});

export default function ThemeProvider({ children }) {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}
