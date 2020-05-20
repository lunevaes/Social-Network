import { connect } from 'react-redux'
import Profile from './Profile'

let mapStateToProps = (state) => {
  return {
    state:state.profilePage
  }
}

const ProfileContainer = connect(mapStateToProps)(Profile)

export default ProfileContainer
