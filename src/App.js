import React from 'react'
import Header from './components/Header/Header'
import Nav from './components/Navbar/Nav'
import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs';
import './App.css';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="App-wrapper">
        <Header />
        <Nav state={props.state.sideBar} />
          <main className="App-wrapper-content">
            <Route path='/dialogs' render={() => <Dialogs dialogsPage={props.state.dialogsPage} addMessage={props.addMessage} changeNewMessage={props.changeNewMessage} />} />
            <Route path='/profile' render={() => <Profile profilePage={props.state.profilePage} addPost={props.addPost} changeNewPost={props.changeNewPost} />} />
          </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
