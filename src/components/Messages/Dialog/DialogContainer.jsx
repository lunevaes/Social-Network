import React from 'react';
import {
  addMessageActionCreator,
  updateMessageActionCreator
} from '../../../redux/messages-reducer'
import Dialog from './Dialog'

const DialogContainer = (props) => {
  let updateMessage = (message) => {
    props.store.dispatch(updateMessageActionCreator(message))
  }

  let sendMessage = () => {
    let action = addMessageActionCreator(props.id, props.state.newMessage)
    props.store.dispatch(action)
  }

  return (
    <Dialog
      state={props.state.messagesArray}
      updateMessage={updateMessage}
      sendMessage={sendMessage}
      newMessage={props.state.newMessage}
      friendsArray={props.state.friendsArray}
      dispatch={props.store.dispatch}
      id={props.id}
    />
  )

}

export default DialogContainer
