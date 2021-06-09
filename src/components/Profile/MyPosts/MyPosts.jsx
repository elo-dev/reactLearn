import React from 'react'
import Post from './Post/Post'
import style from './MyPosts.module.css'

const MyPosts = () => {
    return (
        <div>
          My Posts
          <div>
            New Posts
          </div>
          <div className="posts">
           <Post />
          </div>
        </div>
    )
}

export default MyPosts