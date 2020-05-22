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

      let newState = {...state}
      newState.posts = [...state.posts]
      newState.posts.push(newPost)
      newState.newPostTopic = ''
      newState.newPostText = ''
      return newState
    }

    case UPDATE_POST: {
      let newState = {...state}

      newState.newPostTopic = action.newPostTopic
      newState.newPostText = action.newPostText
      return newState
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
