import React from 'react'
import HeaderContainer from './components/Header/HeaderContainer';
import NavContainer from './components/Navbar/NavContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import UsersContainer from './components/Users/UsersContainer';
import LoginPage from './components/Login/Login';
import './App.css';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

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
            <Route path='/login' render={() => <LoginPage />} />
          </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
