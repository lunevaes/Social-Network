import React from 'react'
import Post from './Post/Post'
import classes from './Posts.module.css'


const Posts = (props) => {
  let posts = props.state.posts.map((post) => {
    return (<Post topic={post.topic} text={post.text}/>)
  })

  let newPost = React.createRef()
  let newTopic = React.createRef()

  let addNewPost = () => {
    props.addPost()
  }

  let updateNewPost = () => {
    let text = newPost.current.value
    let topic = newTopic.current.value
    props.updatePost(topic, text)
  }

  return (<div className={classes.Posts}>
    <textarea className="textarea" onChange={updateNewPost} ref={newTopic} value={props.state.newPostTopic} placeholder="Введите заголовок"></textarea>
    <textarea className="textarea" onChange={updateNewPost} ref={newPost} value={props.state.newPostText} placeholder="Введите текст"></textarea>
    <button className="button" onClick={addNewPost}>Добавить пост</button>
    {posts}
  </div>)
}

export default Posts
