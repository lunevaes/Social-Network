import React from 'react'
import classes from './Profile.module.css'

const Profile = (props) => {
  return (
    <div className={classes.Profile}>
      <div>
        <div>
          <h2>Профиль</h2>
        </div>
        <div className={classes.Info}>
          <div className={classes.Fields}>
            <span>Имя</span>
            <span>Возраст</span>
            <span>Друзья</span>
          </div>
          <div className={classes.Person}>
            <span>{ props.name }</span>
            <span>{ props.age }</span>
            <span>{ props.friends }</span>
          </div>
        </div>

      </div>

      <div className={classes.Userpic}>
        <img src="https://klike.net/uploads/posts/2019-03/1551511784_4.jpg" alt="Userpic" width="100" heigth="100" />
      </div>
    </div>
  )
}

export default Profile
