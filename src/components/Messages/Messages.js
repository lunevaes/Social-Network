import {Route} from 'react-router-dom'
import React from 'react'
import DialogContainer from './Dialog/DialogContainer'
import Friends from './Friends/Friends'
import LastMessages from './LastMessages/LastMessages'
import StoreContext from '../../StoreContext'
import classes from './Messages.module.css'

const Messages = () => {
  return (
    <StoreContext.Consumer>
      {
        (store) => {
          let state = store.getState().messagesPage
          let url = window.location.href
          let id = url.slice(url.lastIndexOf('/') + 1)
          let showDialog = () => {
            if (id === 'messages') {
              return (
                <Route path='/messages' render={() => <LastMessages className={classes.Dialogs} messagesArray={state.messagesArray}/>}/>
              )
            } else if (typeof parseInt(id) === 'number' && parseInt(id)>0) {
              return (
                <DialogContainer id={id}/>
              )
            } else {
              return (
                <p>Something went wrong</p>
              )
            }
          }

          return (
            <div className={classes.Messages}>
              <h2>Сообщения</h2>
              <h3>Друзья</h3>
              <div className={classes.Friends}>
                <Friends friendsArray={state.friendsArray} />
              </div>

              {showDialog()}

            </div>
          )
        }
      }
    </StoreContext.Consumer>
  )
}

export default Messages
