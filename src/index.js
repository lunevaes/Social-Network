import './index.css'
import {BrowserRouter} from 'react-router-dom'
import { Provider } from 'react-redux'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import store from './redux/redux-store'


export let rerenderTree = (state) => {
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App/>
      </Provider>
    </BrowserRouter>,
    document.getElementById('root')
  );
}

rerenderTree(store.getState())

store.subscribe(() => {
  let state = store.getState()
  rerenderTree(state)
})
