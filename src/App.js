import React from 'react'
import Header from './components/Header/Header'
import NavContainer from './components/Navbar/NavContainer';
import Profile from './components/Profile/Profile'
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import './App.css';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App-wrapper">
        <Header />
        <NavContainer />
          <main className="App-wrapper-content">
            <Route path='/dialogs' render={() => <DialogsContainer />} />
            <Route path='/profile' render={() => <Profile />} />
            <Route path='/users' render={() => <UsersContainer />} />
          </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
