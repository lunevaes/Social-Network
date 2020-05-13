import {Route} from 'react-router-dom'
import React from 'react'

import Dialog from './Dialog/Dialog';
import Friends from './Friends/Friends'
import LastMessages from './LastMessages/LastMessages'
import classes from './Messages.module.css'


const Messages = (props) => {
  return (
    <div className={classes.Messages}>
      <h2>Сообщения</h2>
      <h3>Друзья</h3>
      <div className={classes.Friends}>
        <Friends friendsArray={props.state.friendsArray} />
      </div>

      <Route path='/messages' render={() => <LastMessages className={classes.Dialogs} messagesArray={props.state.messagesArray}/>}/>
      <Route path='/messages/1' render={() => <Dialog state={props.state.messagesArray} dispatch={props.dispatch} id={1}/>}/>
    </div>
  )
}

export default Messages
