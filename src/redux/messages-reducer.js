const ADD_MESSAGE = 'ADD_MESSAGE'
const UPDATE_MESSAGE = 'UPDATE_MESSAGE'

const messagesReducer = (state, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      let newMessage = {
        id: parseInt(action.id),
        name: state.userName,
        text: action.messageContent
      }

      state.messagesArray.push(newMessage)
      state.newMessage = ''
      return state
    }

    case UPDATE_MESSAGE: {
      state.newMessage = action.messageContent
      return state
    }

    default: {
      return state
    }
  }
}

export const addMessageActionCreator = (id, text) => ({
  type: 'ADD_MESSAGE',
  messageContent: text,
  id: id
})

export const updateMessageActionCreator = (message) => ({
  type: 'UPDATE_MESSAGE',
  messageContent: message
})

export default messagesReducer
