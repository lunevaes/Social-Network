import {Route} from 'react-router-dom'
import React from 'react'
import DialogContainer from './Dialog/DialogContainer'
import FriendsContainer from './Friends/FriendsContainer'
import LastMessages from './LastMessages/LastMessages'
import classes from './Messages.module.css'

const Messages = (props) => {
  let url = window.location.href
  let id = url.slice(url.lastIndexOf('/') + 1)
  let numericId = parseInt(id)
  const showDialog = () => {
    if (typeof numericId === 'number' && numericId > 0) {
      return (
        <DialogContainer/>
      )
    } else {
      return (
        <Route path='/messages' render={() => <LastMessages className={classes.Dialogs} messagesArray={props.messagesPage.messagesArray}/>}/>
      )
    }
  }

  return (
    <div className={classes.Messages}>
      <h2>Сообщения</h2>
      <h3>Друзья</h3>
      <div className={classes.Friends}>
        <FriendsContainer/>
      </div>

      {showDialog()}

    </div>
  )
}

export default Messages
