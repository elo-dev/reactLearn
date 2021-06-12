import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import style from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
    return (
          <section className="profileWrapper">
            <ProfileInfo />
            <MyPosts posts={props.profilePage.posts}
                     newPostText={props.profilePage.newPostText}
                     changeNewPost={props.changeNewPost}
                     addPost={props.addPost} />
          </section>
    )
}

export default Profile