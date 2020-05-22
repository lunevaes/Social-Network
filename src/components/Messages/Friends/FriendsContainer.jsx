import { connect } from 'react-redux'
import Friends from './Friends'
import {
  updateUrlActionCreator
} from '../../../redux/messages-reducer'

let mapStateToProps = (state) => {
  return {
    state: state.messagesPage.friendsArray,
    url: state.url
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateUrl: (url) => {
      dispatch(updateUrlActionCreator(url))
    }
  }
}

const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends)

export default FriendsContainer
