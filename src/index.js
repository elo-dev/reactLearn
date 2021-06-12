import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import reportWebVitals from './reportWebVitals'
import state, { subscribe } from './redux/state'
import App from './App'
import {addMessage, changeNewMessageText, addPost, changeNewPostText} from './redux/state'

let renderTree = () => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} changeNewPost={changeNewPostText} addMessage={addMessage} changeNewMessage={changeNewMessageText} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

renderTree(state)

subscribe(renderTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
