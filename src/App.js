import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
}

const Header = () => {
  return (
    <header className="header">
      <Navigation />
    </header>
  )
}

const Navigation = () => {
  return (
    <div className="navigation">
      <ul className="navigation__list list">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Your Profile</a>
        </li>
        <li>
          <a href="#">Messages</a>
        </li>
        <li>
          <a href="#">Sign Out</a>
        </li>
      </ul>
    </div>
  )
}

const Body = () => {
  return (
    <main className="App-body">
      <img src={logo} className="App-logo" alt="logo" />
    </main>
  )
}


export default App;
