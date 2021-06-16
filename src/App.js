import React from 'react'
import Header from './components/Header/Header'
import Profile from './components/Profile/Profile'
import DialogsContainer from './components/Dialogs/DialogsContainer';
import './App.css';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import NavContainer from './components/Navbar/NavContainer';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App-wrapper">
        <Header />
        <NavContainer />
          <main className="App-wrapper-content">
            <Route path='/dialogs' render={() => <DialogsContainer />} />
            <Route path='/profile' render={() => <Profile />} />
          </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
