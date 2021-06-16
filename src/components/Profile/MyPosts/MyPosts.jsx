import React from 'react'
import Post from './Post/Post'
import style from './MyPosts.module.css'

const MyPosts = (props) => {

  let postsElements = props.posts.map(p => <Post key={p.id} message={p.message} like={p.like} />)

  let onAddPost = () => {
    props.addPost()
  }

  let onPostChange = (e) => {
    let text = e.target.value
    props.onPostChange(text)
  }

    return (
        <div className={style.infoAboutMe}>
          <h2>My Posts</h2>
          <div className={style.createNewPost}>
            <textarea className={style.textAreaNewPost} onChange={onPostChange} value={props.newPostText} />
            <button className={style.btnAddNewPost} onClick={onAddPost} >Add posts</button>
          </div>
          <div className={style.posts}>
           {postsElements}
          </div>
        </div>
    )
}

export default MyPosts