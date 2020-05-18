import './index.css'

import {BrowserRouter} from 'react-router-dom'
import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import StoreContext from './StoreContext';
import store from './redux/redux-store'


export let rerenderTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <StoreContext.Provider value={store}>
        <App/>
      </StoreContext.Provider>
    </BrowserRouter>,
    document.getElementById('root')
  );
}

rerenderTree(store.getState())

store.subscribe(() => {
  let state = store.getState()
  rerenderTree(state)
})
