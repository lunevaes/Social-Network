import messagesReducer from './messages-reducer';
import postsReducer from './posts-reducer';

const store = {
  _state: {
    messagesPage: {
      messagesArray: [{
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
      }],
      newMessage: "",
      userName: "Софи",
      friendsArray: [{
        id: 1,
        name: "Ivan"
      }, {
        id: 2,
        name: "Masha"
      }, {
        id: 3,
        name: "Irina"
      }]
    },
    postsPage: {
      posts: [{
        id: 1,
        topic: "Понедельник",
        text: "Дождь"
      }, {
        id: 2,
        topic: "Вторник",
        text: "Солнечно"
      }, {
        id: 3,
        topic: "Среда",
        text: "Пасмурно"
      }],
      newPostTopic: '',
      newPostText: ''
    },
    profilePage: {
      profileInfo: {
        name: "Софи",
        age: "23",
        friends: "13",
        avatar: ""
      }
    }
  },
  _callSubscriber() {
    console.log("State changed")
  },
  getState() {
    return this._state
  },
  subscribe(observer) {
    this._callSubscriber = observer
  },
  dispatch(action) {
    this._state.postsPage = postsReducer(this._state.postsPage, action)
    this._state.messagesPage = messagesReducer(this._state.messagesPage, action)
    this._callSubscriber(this._state)
  }
}

export default store
