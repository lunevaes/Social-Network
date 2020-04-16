import React from 'react'
import classes from './Profile.module.css'

const Profile = () => {
  return (
    <div className={classes.Profile}>
      <div>
        <div>
          <h2>Профиль</h2>
        </div>
        <div>
          <h3>Имя</h3>
          <p>Возраст</p>
          <p>Друзья</p>
        </div>
      </div>

      <div className={classes.Userpic}>
        <img src="https://klike.net/uploads/posts/2019-03/1551511784_4.jpg" alt="Userpic" width="100" heigth="100" />
      </div>
    </div>
  )
}

export default Profile
