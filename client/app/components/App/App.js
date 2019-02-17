import React, { Component } from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Map from '../Map/Map';

const App = ({ children }) => (
  <>
    <Header />

    <Map />

    <Footer />
  </>
);

export default App;
