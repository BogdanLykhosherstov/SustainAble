import React, { Component } from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import green from '@material-ui/core/colors/green';

import MainPage from '../App/MainPage';

const theme = createMuiTheme({
  palette: {
    primary: {
        main: '#0091ea',
        dark:'#0091ea'
    }
}
});

const App = ({ children }) => (
  <>
  <MuiThemeProvider theme={theme}>
    <main>

      <MainPage/>

    </main>
     </MuiThemeProvider>

  </>
);

export default App;
