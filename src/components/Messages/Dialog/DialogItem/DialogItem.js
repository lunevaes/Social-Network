import React from 'react'
import classes from './DialogItem.module.css'

const DialogItem = (data, id) => {
  return (
    <div className={classes.DialogItem}>
      <h5 className={classes.Name}>
        {data[id].name}
      </h5>
      <p className={classes.Text}>
        {data[id].text}
      </p>
    </div>
  )
}

export default DialogItem
