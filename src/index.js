import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'

import App from './App'
import store from './redux/redux-store'

export let rerenderTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} dispatch={store.dispatch.bind(store)}/>
    </BrowserRouter>,
    document.getElementById('root')
  );
}

rerenderTree(store.getState())

store.subscribe(() => {
  let state = store.getState()
  rerenderTree(state)
})
