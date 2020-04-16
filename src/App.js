import React from 'react'

import Body from './containers/Body/Body'
import Footer from './containers/Footer/Footer';
import Header from './containers/Header/Header'
import classes from './App.module.css'

function App() {
  return (
    <div className={classes.App}>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
