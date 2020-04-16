import React from 'react'
import Profile from '../../components/Profile/Profile';
import classes from './Body.module.css'

const Body = () => {
  return (
    <main className={classes.Body}>
      <div className={classes.Wrapper}>
        <Profile />
      </div>      
    </main>
  )
}

export default Body
