import React from 'react'
import Post from './Post/Post'
import style from './MyPosts.module.css'

const MyPosts = (props) => {

  let postsElements = props.posts.map(p => <Post message={p.message} like={p.like} />)

  let currentValuePost = React.createRef()

  let addPost = () => {
    props.addPost()
  }

  let onPostChange = () => {
    let text = currentValuePost.current.value
    props.changeNewPost(text)
  }

    return (
        <div className={style.infoAboutMe}>
          <h2>My Posts</h2>
          <div className={style.createNewPost}>
            <textarea className={style.textAreaNewPost} ref={currentValuePost} onChange={onPostChange} value={props.newPostText} />
            <button className={style.btnAddNewPost} onClick={addPost} >Add posts</button>
          </div>
          <div className={style.posts}>
           {postsElements}
          </div>
        </div>
    )
}

export default MyPosts