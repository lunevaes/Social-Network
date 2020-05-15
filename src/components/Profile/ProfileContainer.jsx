import React from 'react'
import Profile from './Profile'

const ProfileContainer = (props) => {
  let state = props.store.getState().profilePage

  return (
    <Profile state={state}/>
  )
}

export default ProfileContainer
