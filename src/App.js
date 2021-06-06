import React from 'react'
import Header from './components/Header'
import Nav from './components/Nav'
import Prfile from './components/Profile'
import './App.css';

function App() {
  return (
    <div className="App-wrapper">
      <Header />
      <Nav />
      <Prfile /> 
    </div>
  );
}

export default App;
