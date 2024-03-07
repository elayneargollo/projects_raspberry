import Routes from "../routes";
import React, { Component } from 'react';
import { ThemeProvider } from '@material-ui/core';
import { AuthProvider } from '../contexts/auth';
import CssBaseline from '@material-ui/core/CssBaseline';
import theme from './theme';

export default class App extends Component {

  render() {
    return (
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <React.StrictMode>
            <CssBaseline />
            <Routes />
          </React.StrictMode>
        </ThemeProvider>
      </AuthProvider>
    );
  }
}