const ADD_POST = 'ADD_POST'
const UPDATE_POST = 'UPDATE_POST'

let initialState = {
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
}

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: state.posts.length,
        topic: state.newPostTopic,
        text: state.newPostText
      }

      state.posts.push(newPost)
      state.newPostTopic = ''
      state.newPostText = ''
      return state
    }

    case UPDATE_POST: {
      state.newPostTopic = action.newPostTopic
      state.newPostText = action.newPostText
      return state
    }

    default: {
      return state
    }
  }
}

export const updatePostActionCreator = (topic, text) => ({
  type: 'UPDATE_POST',
  newPostTopic: topic,
  newPostText: text
})


export const addPostActionCreator = () => ({
  type: 'ADD_POST'
})

export default postsReducer
