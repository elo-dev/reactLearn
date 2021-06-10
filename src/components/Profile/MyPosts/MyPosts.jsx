import React from 'react'
import Post from './Post/Post'
import style from './MyPosts.module.css'

const MyPosts = (props) => {

  let postsElements = props.posts.map(p => <Post message={p.message} like={p.like} />)

    return (
        <div className={style.infoAboutMe}>
          <h2>My Posts</h2>
          <div>
            New Posts
          </div>
          <div className={style.posts}>
           {postsElements}
          </div>
        </div>
    )
}

export default MyPosts