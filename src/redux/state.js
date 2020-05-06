import { rerenderTree } from '../render';

const state = {
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
    }]
  },
  profilePage: {
    profileInfo: {
      name: "Софи",
      age: "23",
      friends: "13",
      avatar: ""
    }
  }
}

export const addPost = (postMessage) => {
  let newPost = {
    id: state.postsPage.posts.length,
    topic: "Среда",
    text: postMessage
  }

  state.postsPage.posts.push(newPost)
  rerenderTree(state)
}

export default state
