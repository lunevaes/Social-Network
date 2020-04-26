import React from 'react'
import classes from './Dialogs.module.css'

const Dialog = (data, id) => {
  return (<div className={classes.Dialog}>
    <h5 className={classes.Name}>
      {data[id].name}
    </h5>
    <p>
      {data[id].text}
    </p>
  </div>)
}

const Dialogs = (props) => {

  let dialog = []

  for (let i = 0; i < props.messagesArray.length; i++) {
    let newDialog = Dialog(props.messagesArray, i)
    dialog.push(newDialog)
  }

  return (dialog)
}

export default Dialogs
