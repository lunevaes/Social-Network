import React from 'react'
import classes from './LastMessages.module.css'
import Message from './Message/Message'

const LastMessages = (props) => {

  let dialog = []

  for (let i = 0; i < props.messagesArray.length; i++) {
    let newDialog = Message(props.messagesArray, i)
    dialog.push(newDialog)
  }

  return (
    <div className={classes.Dialogs}>
      <h3>Последние сообщения</h3>
      { dialog }
    </div>
  )
}

export default LastMessages
