import React from 'react'
import Header from './components/Header/Header'
import Nav from './components/Navbar/Nav'
import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs';
import './App.css';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

function App(props) {
  return (
    <BrowserRouter>
      <div className="App-wrapper">
        <Header />
        <Nav />
          <main className="App-wrapper-content">
            <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage} />} />
            <Route path='/profile' render={() => <Profile state={props.state.profilePage} />} />
          </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
