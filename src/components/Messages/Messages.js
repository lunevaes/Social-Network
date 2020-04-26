import React from 'react'

import Dialogs from './Dialogs/Dialogs'
import Friends from './Friends/Friends';
import classes from './Messages.module.css'


const Messages = (props) => {
  return (
    <div className={classes.Messages}>
      <h2>Сообщения</h2>
      <h3>Друзья</h3>
      <div className={classes.Friends}>
        <Friends friendsArray={props.friendsArray} />
      </div>
      <h3>Диалоги</h3>
      <div>
        <Dialogs messagesArray={props.messagesArray}/>
      </div>
    </div>
  )
}

export default Messages
