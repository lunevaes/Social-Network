import React from 'react'
import classes from './Navigation.module.css'
import {NavLink} from 'react-router-dom'

const Navigation = () => {
  return (
    <div className={classes.navigation}>
      <ul className={classes.list}>
        <li className={classes.item}>
          <NavLink className={classes.link} to="/">Home</NavLink>
        </li>
        <li className={classes.item}>
          <NavLink className={classes.link} activeClassName={classes.active} to="/profile">Your Profile</NavLink>
        </li>
        <li className={classes.item}>
          <NavLink className={classes.link} activeClassName={classes.active} to="/messages">Messages</NavLink>
        </li>
        <li className={classes.item}>
          <NavLink className={classes.link} activeClassName={classes.active} to="/posts">Posts</NavLink>
        </li>
        <li className={classes.item}>
          <NavLink className={classes.link} activeClassName={classes.active} to="/auto">Sign Out</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navigation
