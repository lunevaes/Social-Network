import React from 'react'
import Message from './Message/Message'
import classes from './Messages.module.css'


const Messages = (props) => {
  return (
    <div className={classes.Messages}>
      <h2>Сообщения</h2>
      <Message name="Vic" text="Hi"/>
      <Message name="Mic" text="Hi!"/>
      <Message name="Nic" text="Hi!!"/>
    </div>
  )
}

export default Messages
