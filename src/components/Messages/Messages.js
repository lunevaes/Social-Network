import {Route} from 'react-router-dom'
import React from 'react'
import DialogContainer from './Dialog/DialogContainer'
import Friends from './Friends/Friends'
import LastMessages from './LastMessages/LastMessages'
import classes from './Messages.module.css'

let url = window.location.href
let id = url.slice(url.lastIndexOf('/') + 1)

const Messages = (props) => {
  const showDialog = () => {
    if (id === 'messages') {
      return (
        <Route path='/messages' render={() => <LastMessages className={classes.Dialogs} messagesArray={props.messagesPage.messagesArray}/>}/>
      )
    } else if (typeof parseInt(id) === 'number' && parseInt(id) > 0) {
      return (
        <DialogContainer/>
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
        <Friends friendsArray={props.messagesPage.friendsArray}/>
      </div>

      {showDialog()}

    </div>
  )
}

export default Messages
