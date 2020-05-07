import React from 'react'
import {updatePost} from '../../redux/state'
import {addPost} from '../../redux/state'
import Post from './Post/Post'
import classes from './Posts.module.css'

const Posts = (props) => {
  let posts = props.state.posts.map((post) => {
    return (<Post topic={post.topic} text={post.text}/>)
  })

  let newPost = React.createRef()
  let newTopic = React.createRef()

  let addNewPost = () => {
    addPost(props.state.newPostTopic, props.state.newPostText)
  }

  let updateNewPost = () => {
    let text = newPost.current.value
    let topic = newTopic.current.value
    updatePost(topic, text)
  }

  return (<div className={classes.Posts}>
    <textarea className="textarea" onChange={updateNewPost} ref={newTopic} value={props.state.newPostTopic} placeholder="Введите заголовок"></textarea>
    <textarea className="textarea" onChange={updateNewPost} ref={newPost} value={props.state.newPostText} placeholder="Введите текст"></textarea>
    <button className="button" onClick={addNewPost}>Добавить пост</button>
    {posts}
  </div>)
}

export default Posts
