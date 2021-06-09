import React from 'react'
import Header from './components/Header/Header'
import Nav from './components/Navbar/Nav'
import Profile from './components/Profile/Profile'
import './App.css';

function App() {
  return (
    <div className="App-wrapper">
      <Header />
      <Nav />
      <Profile /> 
    </div>
  );
}

export default App;
