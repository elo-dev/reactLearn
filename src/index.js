import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import reportWebVitals from './reportWebVitals'
import store from './redux/state'
import App from './App'

let renderTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state}
           addPost={store.addPost.bind(store)}
           changeNewPost={store.changeNewPostText.bind(store)}
           addMessage={store.addMessage.bind(store)}
           changeNewMessage={store.changeNewMessageText.bind(store)} />
    </React.StrictMode>,
    document.getElementById('root')
  );
}

renderTree(store.getState())

store.subscribe(renderTree)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
