import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
  {id: 1, message: 'Hi, how are you', like: 5},
  {id: 2, message: 'It`s my first post', like: 10},
  {id: 3, message: 'What it`s happen', like: 15}
]

let dialogs = [
  {id: 1, name: 'Dima'},
  {id: 2, name: 'Andrey'},
  {id: 3, name: 'Alina'}
]

let messages = [
  {id: 1, message: 'Hello'},
  {id: 2, message: 'HI'},
  {id: 3, message: 'What'}
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} messages={messages}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
