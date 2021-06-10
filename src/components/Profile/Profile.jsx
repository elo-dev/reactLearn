import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import style from './Profile.module.css'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = () => {
    return (
        <main>
          <section className="App-content">
            <ProfileInfo />
            <MyPosts />
          </section>
        </main>
    )
}

export default Profile