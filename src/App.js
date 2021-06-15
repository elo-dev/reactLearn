import React from 'react'
import Header from './components/Header/Header'
import Nav from './components/Navbar/Nav'
import Profile from './components/Profile/Profile'
import DialogsContainer from './components/Dialogs/DialogsContainer';
import './App.css';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="App-wrapper">
        <Header />
        <Nav />
          <main className="App-wrapper-content">
            <Route path='/dialogs' render={() => <DialogsContainer />} />
            <Route path='/profile' render={() => <Profile />} />
          </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
