import React from 'react'
import Header from './components/Header/Header'
import Nav from './components/Navbar/Nav'
import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs';
import './App.css';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="App-wrapper">
        <Header />
        <Nav state={props.state.sideBar} />
          <main className="App-wrapper-content">
            <Route path='/dialogs' render={() => <DialogsContainer store={props.store} />} />
            <Route path='/profile' render={() => <Profile store={props.store} />} />
          </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
