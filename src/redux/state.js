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
  getState() {
    return this._state
  },
  _callSubscriber() {
    console.log("State changed")
  },
  addPost(postTopic, postMessage) {
    let newPost = {
      id: this._state.postsPage.posts.length,
      topic: postTopic,
      text: postMessage
    }

    this._state.postsPage.posts.push(newPost)
    this._state.postsPage.newPostTopic = ''
    this._state.postsPage.newPostText = ''
    this._callSubscriber(this._state)
  },
  updatePost(newPostTopic, newPostText) {
    this._state.postsPage.newPostTopic = newPostTopic
    this._state.postsPage.newPostText = newPostText
    this._callSubscriber(this._state)
  },
  subscribe(observer) {
    this._callSubscriber = observer
  }
}

export default store
