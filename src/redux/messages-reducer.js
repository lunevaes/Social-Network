const ADD_MESSAGE = 'ADD_MESSAGE'
const UPDATE_MESSAGE = 'UPDATE_MESSAGE'
const UPDATE_URL = 'UPDATE_URL'

let url = window.location.href
let id = url.slice(url.lastIndexOf('/') + 1)

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
  url: id,
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
        id: parseInt(state.url),
        name: state.userName,
        text: state.newMessage
      }
      let newState = {...state}
      newState.messagesArray = [...state.messagesArray]

      newState.messagesArray.push(newMessage)
      newState.newMessage = ''
      return newState
    }

    case UPDATE_MESSAGE: {
      let newState = {...state}
      newState.newMessage = action.messageContent
      return newState
    }

    case UPDATE_URL: {
      let newState = {...state}
      newState.url = action.url
      return newState
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

export const updateUrlActionCreator = (url) => ({
  type: 'UPDATE_URL',
  url: url
})

export default messagesReducer
