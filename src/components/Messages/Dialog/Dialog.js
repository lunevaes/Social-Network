import React from 'react'
import DialogItem from './DialogItem/DialogItem'
import classes from './Dialog.module.css'

const Dialog = (props) => {

  let dialog = []

  let newAnswer = React.createRef()

  let addAnswer = () => {
    let text = newAnswer.current.value
    alert(text)
  }

  for (let i = 0; i < props.length; i++) {

    if (props.id === props.state[i].id) {
      let newDialog = DialogItem(props, i)
      dialog.push(newDialog)
    }
  }
  return (
    <div className={classes.Dialog}>

      { dialog }
      <textarea className="textarea" ref={newAnswer}></textarea>
      <button className="button" onClick={addAnswer}>Добавить ответ</button>
    </div>
  )
}

export default Dialog