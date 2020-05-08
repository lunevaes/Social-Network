import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'

import App from './App'
import store from './redux/state'

export let rerenderTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} addPost={store.addPost.bind(store)} updatePost={store.updatePost.bind(store)}/>
    </BrowserRouter>,
    document.getElementById('root')
  );
}

rerenderTree(store.getState())
store.subscribe(rerenderTree)
