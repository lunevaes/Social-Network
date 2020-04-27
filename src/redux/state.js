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
      topic: "Понедельник",
      text: "Дождь"
    }, {
      topic: "Вторник",
      text: "Солнечно"
    }, {
      topic: "Среда",
      text: "Пасмурно"
    }]
  },
  profilePage: {
    profileInfo: {
      name: "Софи",
      age: "23",
      friends: "13"
    }
  }
}

export default state
