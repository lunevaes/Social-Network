import { connect } from 'react-redux'
import {
  addMessageActionCreator,
  updateMessageActionCreator
} from '../../../redux/messages-reducer'
import Dialog from './Dialog'

let url = window.location.href
let id = url.slice(url.lastIndexOf('/') + 1)

let mapStateToProps = (state) => {
  return {
    state: state.messagesPage.messagesArray,
    newMessage: state.messagesPage.newMessage,
    friendsArray: state.messagesPage.friendsArray,
    id: id
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateMessage: (newMessage) => {
      dispatch(updateMessageActionCreator(newMessage))
    },
    sendMessage: (id, newMessage) => {
      let action = addMessageActionCreator(id, newMessage)
      dispatch(action)
    }
  }
}

const DialogContainer = connect(mapStateToProps, mapDispatchToProps)(Dialog)

export default DialogContainer
