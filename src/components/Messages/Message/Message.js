import React from 'react'
import classes from './Message.module.css'

const Message = (props) => {
  return (
    <div className={classes.Message}>
      <span className={classes.Name}>{ props.name }</span>
      <p className={classes.Text}>{ props.text }</p>
    </div>
  )
}

export default Message
