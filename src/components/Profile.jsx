import React from 'react'
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
            <div>
              My Posts
              <div>
                New Posts
              </div>
              <div className="posts">
                <div className="posts-item">
                  item
                </div>
                <div className="posts-item">
                  item
                </div>
              </div>
            </div>
          </section>
        </main>
    )
}

export default Profile