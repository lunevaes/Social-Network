import React from 'react'
import classes from './Dialogs.module.css'

const Dialog = (data, id) => {
  return (
      <div className={classes.Dialog}>
        <h5 className={classes.Name}> { data[id].name } </h5>
        <p> { data[id].text } </p>
      </div>
    )
}

const Dialogs = () => {
  let array = [
    {
      id: 1,
      name: "Ivan",
      text: "hi"
    },
    {
      id: 2,
      name: "Masha",
      text: "hi!"
    },
    {
      id: 3,
      name: "Irina",
      text: "hi!!"
    }
  ]
  let dialog = []

  for (let i = 0; i < array.length; i++) {
    let newDialog = Dialog(array, i)
    dialog.push(newDialog)
  }

  return (
    dialog
  )
}

export default Dialogs
