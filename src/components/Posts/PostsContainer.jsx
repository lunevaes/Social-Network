import { connect } from 'react-redux'
import {
  addPostActionCreator,
  updatePostActionCreator
} from '../../redux/posts-reducer'
import Posts from './Posts'

let mapStateToProps = (state) => {
  return {
    state: state.postsPage
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      let action = addPostActionCreator()
      dispatch(action)
    },
    updatePost: (topic, text) => {
      let action = updatePostActionCreator(topic, text)
      dispatch(action)
    }
  }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer
