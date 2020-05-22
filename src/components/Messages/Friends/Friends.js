import React from 'react'
import classes from './Friends.module.css'
import {NavLink} from 'react-router-dom'

const Friends = (props) => {

  const Friend = (data, id) => {
    let updateUrl = (e) => {
      debugger;
      let url = e.target.id
      props.updateUrl(url)
      console.log(props.url)
    }
    return (
        <div className={classes.Friend}>
          <NavLink className={classes.Name} id={data[id].id} to={"/messages/" + data[id].id} onClick={updateUrl}> { data[id].name } </NavLink>
        </div>
      )
  }
  let friend = []

  for (let i = 0; i < props.state.length; i++) {
    let newFriend = Friend(props.state, i)
    friend.push(newFriend)
  }

  return (
    friend
  )
}

export default Friends
