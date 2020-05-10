const ADD_POST = 'ADD_POST'
const UPDATE_POST = 'UPDATE_POST'

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
    switch (action.type) {
      case ADD_POST: {
        let newPost = {
          id: this._state.postsPage.posts.length,
          topic: action.postTopic,
          text: action.postMessage
        }

        this._state.postsPage.posts.push(newPost)
        this._state.postsPage.newPostTopic = ''
        this._state.postsPage.newPostText = ''
        this._callSubscriber(this._state)
        break;
      }
      case UPDATE_POST: {
        this._state.postsPage.newPostTopic = action.newPostTopic
        this._state.postsPage.newPostText = action.newPostText
        this._callSubscriber(this._state)
        break;
      }

      default: {
        break;
      }
    }
  }
}

export const addPostActionCreator = (topic, text) => ({
  type: 'ADD_POST',
  postTopic: topic,
  postMessage: text
})

export const updatePostActionCreator = (topic, text) => ({
  type: 'UPDATE_POST',
  newPostTopic: topic,
  newPostText: text
})

export default store
