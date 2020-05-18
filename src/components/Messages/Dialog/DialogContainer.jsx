import React from 'react'
import {
  addMessageActionCreator,
  updateMessageActionCreator
} from '../../../redux/messages-reducer'
import Dialog from './Dialog'
import StoreContext from '../../../StoreContext'

const DialogContainer = (props) => {
  return (
    <StoreContext.Consumer>
      {
        (store) => {
          let state = store.getState().messagesPage
          let updateMessage = (message) => {
            store.dispatch(updateMessageActionCreator(message))
          }

          let sendMessage = () => {
            let action = addMessageActionCreator(props.id, state.newMessage)
            store.dispatch(action)
          }

          return (
            <Dialog
              state={state.messagesArray}
              updateMessage={updateMessage}
              sendMessage={sendMessage}
              newMessage={state.newMessage}
              friendsArray={state.friendsArray}
              dispatch={store.dispatch}
              id={props.id}
            />
          )
        }
      }
    </StoreContext.Consumer>
  )
}

export default DialogContainer
