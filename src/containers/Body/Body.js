import React from 'react'

import Messages from '../../components/Messages/Messages'
import Posts from '../../components/Posts/Posts'
import Profile from '../../components/Profile/Profile'
import classes from './Body.module.css'


const Body = () => {
  return (
    <main className={classes.Body}>
      <div className={classes.Wrapper}>
        <Profile name="Софи" age="23" friends="13"/>
        <Messages />
        <Posts />
      </div>
    </main>
  )
}

export default Body
