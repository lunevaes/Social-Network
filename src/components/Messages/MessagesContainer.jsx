import { connect } from 'react-redux'
import Messages from './Messages'
import {
  updatePageActionCreator
} from '../../redux/messages-reducer'

let mapStateToProps = (state) => {
  return {
    messagesPage: state.messagesPage,
    address: window.location.href.slice(window.location.href.lastIndexOf('/') + 1)
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    
  }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)

export default MessagesContainer
