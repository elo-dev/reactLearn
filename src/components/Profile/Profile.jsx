import React from 'react'
import MyPostsContainer from './MyPosts/MyPostContainer'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const Profile = (props) => {
    return (
          <section className="profileWrapper">
            <ProfileInfo profile={props.profile} />
            <MyPostsContainer />
          </section>
    )
}

export default Profile