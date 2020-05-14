import {Route} from 'react-router-dom'
import React from 'react'

import Dialog from './Dialog/Dialog';
import Friends from './Friends/Friends'
import LastMessages from './LastMessages/LastMessages'
import classes from './Messages.module.css'

const Messages = (props) => {
  debugger;
  let url = window.location.href

  let id = url.slice(url.lastIndexOf('/') + 1)

  let showDialog = () => {
    if (id === 'messages') {
      return (
        <Route path='/messages' render={() => <LastMessages className={classes.Dialogs} messagesArray={props.state.messagesArray}/>}/>
      )
    } else if (typeof parseInt(id) === 'number' && parseInt(id)>0) {
      return (
        <Dialog state={props.state.messagesArray} newMessage={props.state.newMessage} friendsArray={props.state.friendsArray} dispatch={props.dispatch} id={id}/>
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
        <Friends friendsArray={props.state.friendsArray} />
      </div>

      {showDialog()}

    </div>
  )
}

export default Messages
