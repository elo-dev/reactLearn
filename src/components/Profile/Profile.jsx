import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import style from './Profile.module.css'

const Profile = () => {
    return (
        <main className={style.profile}>
          <section className="App-content">
            <div className={style.avatar}>
              <img src="https://image.freepik.com/free-vector/bearded-man-avatar-man-vector-portrait_9385-36.jpg"></img>
            </div>
            <div>
              ava+descr
            </div>
            <MyPosts />
          </section>
        </main>
    )
}

export default Profile