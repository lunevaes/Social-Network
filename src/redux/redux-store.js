import { combineReducers, createStore } from 'redux'
import messagesReducer from './messages-reducer'
import postsReducer from './posts-reducer'
import profileReducer from './profile-reducer'


let reducers = combineReducers ({
  messagesPage: messagesReducer,
  postsPage: postsReducer,
  profilePage: profileReducer
})

let store = createStore(reducers)

export default store
