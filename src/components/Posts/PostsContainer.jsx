import React from 'react'
import {
  addPostActionCreator,
  updatePostActionCreator
} from '../../redux/posts-reducer'
import Posts from './Posts'
import StoreContext from '../../StoreContext'


const PostsContainer = () => {
  return (
    <StoreContext.Consumer>
      {
        (store) => {
          let state = store.getState().postsPage

          let addPost = () => {
            let action = addPostActionCreator(state.newPostTopic, state.newPostText)
            store.dispatch(action)
          }

          let updatePost = (topic, text) => {
            let action = updatePostActionCreator(topic, text)
            store.dispatch(action)
          }

          return (
            <Posts
              state={state}
              addPost={addPost}
              updatePost={updatePost}
            />
          )
        }
      }

    </StoreContext.Consumer>
  )
}

export default PostsContainer
