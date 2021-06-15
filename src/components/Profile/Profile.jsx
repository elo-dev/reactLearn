import React from 'react'
import MyPostsContainer from './MyPosts/MyPostContainer'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
    return (
          <section className="profileWrapper">
            <ProfileInfo />
            <MyPostsContainer />
          </section>
    )
}

export default Profile