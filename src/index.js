import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { GridThemeProvider } from 'styled-bootstrap-grid';

const gridTheme = {
  gridColumns: 12, // default 12
  breakpoints: {
    xxl: 1440,
    xl: 1200,
    lg: 992,
    md: 768,
    sm: 576,
    xs: 575,
  },
  row: {
    padding: 0, // default 15
  },
  col: {
    padding: 0, // default 15
  },
  container: {
    padding: 0, // default 15
    maxWidth: {
      // xxl: 1441,
      // xl: 1440,
      xxl: 1141,
      xl: 1140,
      lg: 960,
      md: 720,
      sm: 540,
      xs: 540,
    },
  },
};

ReactDOM.render(
  <React.StrictMode>

    <GridThemeProvider
      gridTheme={gridTheme}
    >
      <App />
    </GridThemeProvider>

  </React.StrictMode>,
  document.getElementById('root')
);