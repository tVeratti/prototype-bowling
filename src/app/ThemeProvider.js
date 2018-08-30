import React from 'react';
import { ThemeContext, buildTheme } from 'veratti-ui';

const theme = buildTheme({
  font: 'Arial, Helvetica, sans-serif',
  // prettier-ignore
  palette: {
      base:       '#363537',
      primary:    '#EF2D56',
      secondary:  '#0CCE6B',
      contrast:   '#ED7D3A',

      error:      '#df3e3e',
      text:       '#ccc'
    }
});

export default function ThemeProvider({ children }) {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
}
