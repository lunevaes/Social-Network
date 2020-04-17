import React from 'react'
import classes from './Navigation.module.css'

const Navigation = () => {
  return (
    <div className={classes.navigation}>
      <ul className={classes.list}>
        <li className={classes.item}>
          <a className={classes.link} href="#">Home</a>
        </li>
        <li className={classes.item}>
          <a className={classes.link} href="/profile">Your Profile</a>
        </li>
        <li className={classes.item}>
          <a className={classes.link} href="/messages">Messages</a>
        </li>
        <li className={classes.item}>
          <a className={classes.link} href="/posts">Posts</a>
        </li>
        <li className={classes.item}>
          <a className={classes.link} href="#">Sign Out</a>
        </li>
      </ul>
    </div>
  )
}

export default Navigation
