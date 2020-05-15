const ADD_MESSAGE = 'ADD_MESSAGE'
const UPDATE_MESSAGE = 'UPDATE_MESSAGE'

let initialState = {
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
}

const messagesReducer = (state = initialState, action) => {
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
