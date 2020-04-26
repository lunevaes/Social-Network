import React from 'react'
import classes from './Friends.module.css'
import {NavLink} from 'react-router-dom'

const Friend = (data, id) => {
  return (
      <div className={classes.Friend}>
        <NavLink className={classes.Name} to={"/messages/" + data[id].id}> { data[id].name } </NavLink>
      </div>
    )
}

const Friends = (props) => {

  let friend = []

  for (let i = 0; i < props.friendsArray.length; i++) {
    let newFriend = Friend(props.friendsArray, i)
    friend.push(newFriend)
  }

  return (
    friend
  )
}

export default Friends
