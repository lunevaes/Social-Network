const ADD_POST = 'ADD_POST'
const UPDATE_POST = 'UPDATE_POST'

const postsReducer = (state, action) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: state.posts.length,
        topic: action.postTopic,
        text: action.postMessage
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


export const addPostActionCreator = (topic, text) => ({
  type: 'ADD_POST',
  postTopic: topic,
  postMessage: text
})

export default postsReducer