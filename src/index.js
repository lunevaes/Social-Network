import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const posts = [
  {
    topic: "Понедельник",
    text: "Дождь"
  }, {
    topic: "Вторник",
    text: "Солнечно"
  }, {
    topic: "Среда",
    text: "Пасмурно"
  }
]

const profileInfo = {
  name: "Софи",
  age: "23",
  friends: "13"
}

const messagesArray = [
  {
    id: 1,
    name: "Ivan",
    text: "hi"
  }, {
    id: 2,
    name: "Masha",
    text: "hi!"
  }, {
    id: 3,
    name: "Irina",
    text: "hi!!"
  }
]

const friendsArray = [
  {
    id: 1,
    name: "Ivan"
  }, {
    id: 2,
    name: "Masha"
  }, {
    id: 3,
    name: "Irina"
  }
]

ReactDOM.render(<React.StrictMode>
  <App posts={posts} profileInfo={profileInfo} messagesArray={messagesArray} friendsArray={friendsArray}/>
</React.StrictMode>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
