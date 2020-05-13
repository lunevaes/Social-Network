import React from 'react'
import classes from './Message.module.css'
import {NavLink} from 'react-router-dom'

const Message = (data, id) => {
  return (
    <NavLink className={classes.Message} to={"/messages/" + data[id].id}>
      <div>
        <h5 className={classes.Name}>
          {data[id].name}
        </h5>
        <p className={classes.Text}>
          {data[id].text}
        </p>
      </div>

    </NavLink>
  )
}

export default Message
