import React, { Component } from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';


import MainPage from '../App/MainPage';
import WelcomePage from './WelcomePage';



const App = ({ children }) => (
  <>

    <main>
      {/*<WelcomePage/>*/}
      {children}
    </main>

  </>
);

export default App;
