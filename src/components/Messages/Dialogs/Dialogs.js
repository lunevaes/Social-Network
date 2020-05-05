import React from 'react'
import classes from './Dialogs.module.css'

const Dialog = (data, id) => {
  let newAnswer = React.createRef()

  let addAnswer = () => {
    let text = newAnswer.current.value
    alert(text)
  }

  return (<div className={classes.Dialog}>
    <h5 className={classes.Name}>
      {data[id].name}
    </h5>
    <p>
      {data[id].text}
    </p>
    <textarea className="textarea" ref={newAnswer}></textarea>
    <button className="button" onClick={addAnswer}>Добавить ответ</button>
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
