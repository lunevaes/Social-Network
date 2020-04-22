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

const Friends = () => {
  let array = [
    {
      id: 1,
      name: "Ivan"
    },
    {
      id: 2,
      name: "Masha"
    },
    {
      id: 3,
      name: "Irina"
    }
  ]
  let friend = []

  for (let i = 0; i < array.length; i++) {
    let newFriend = Friend(array, i)
    friend.push(newFriend)
  }

  return (
    friend
  )
}

export default Friends
