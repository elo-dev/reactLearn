import React from 'react'
import HeaderContainer from './components/Header/HeaderContainer';
import NavContainer from './components/Navbar/NavContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import './App.css';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import ProfileContainer from './components/Profile/ProfileContainer';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App-wrapper">
        <HeaderContainer />
        <NavContainer />
          <main className="App-wrapper-content">
            <Route path='/dialogs' render={() => <DialogsContainer />} />
            <Route path='/profile/:userId?' render={() => <ProfileContainer />} />
            <Route path='/users' render={() => <UsersContainer />} />
          </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
