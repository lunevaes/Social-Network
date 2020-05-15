import React from 'react'

import {
  addPostActionCreator,
  updatePostActionCreator
} from '../../redux/posts-reducer';
import Posts from './Posts';


const PostsContainer = (props) => {
  let state = props.store.getState().postsPage

  let addPost = () => {
    let action = addPostActionCreator(state.newPostTopic, state.newPostText)
    props.store.dispatch(action)
  }

  let updatePost = (topic, text) => {
    let action = updatePostActionCreator(topic, text)
    props.store.dispatch(action)
  }

  return (
    <Posts
      state={state}
      addPost={addPost}
      updatePost={updatePost}
    />
  )

}

export default PostsContainer
