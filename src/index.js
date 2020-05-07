import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter
} from 'react-router-dom'

import App from './App'
import state, {
  subscribe
} from './redux/state'
import {
  addPost
} from './redux/state'


export let rerenderTree = (state) => {
  ReactDOM.render( <
    BrowserRouter >
    <
    App state = {
      state
    }
    addPost = {
      addPost
    }
    /> <
    /BrowserRouter>, document.getElementById('root')
  );
}

rerenderTree(state)
subscribe(rerenderTree)
