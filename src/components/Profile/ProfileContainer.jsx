import React from 'react'
import Profile from './Profile'
import StoreContext from '../../StoreContext'


const ProfileContainer = () => {
  return (
    <StoreContext.Consumer>
      {
        (store) => {
          let state = store.getState().profilePage
          return <Profile state={state}/>
        }
      }
    </StoreContext.Consumer>
  )
}

export default ProfileContainer
