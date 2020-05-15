import React from 'react'
import DialogItem from './DialogItem/DialogItem'
import classes from './Dialog.module.css'

const Dialog = (props) => {
  let dialog = []

  let id = props.id - 1

  let user = props.friendsArray[id]

  let newAnswer = React.createRef()

  let onUpdateMessage = (e) => {
    let message = e.target.value
    props.updateMessage(message)
  }

  let onSendMessageClick = () => {
    props.sendMessage()
    updateDialog()
  }

  let updateDialog = () => {
    for (let i = 0; i < props.state.length; i++) {
      let newDialog = DialogItem(props.state, i)
      if(props.state[i].id == props.id) {
        dialog.push(newDialog)
      }
    }
  }

  updateDialog()

  return (
    <div className={classes.Dialog}>
      <h3>История переписки с пользователем {user.name}</h3>
      { dialog }
      <textarea className="textarea" value={props.newMessage} onChange={onUpdateMessage} placeholder="Введите текст сообщения" ref={newAnswer}></textarea>
      <button className="button" onClick={onSendMessageClick}>Добавить ответ</button>
    </div>
  )
}

export default Dialog
