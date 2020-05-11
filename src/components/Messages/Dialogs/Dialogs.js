import React from 'react'
import classes from './Dialogs.module.css'
import Dialog from './Dialog/Dialog'

const Dialogs = (props) => {

  let dialog = []

  for (let i = 0; i < props.messagesArray.length; i++) {
    let newDialog = Dialog(props.messagesArray, i)
    dialog.push(newDialog)
  }

  return (dialog)
}

export default Dialogs
