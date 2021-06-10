import React from 'react'
import style from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
      <div>
        <div className={style.avatar}>
          <img src="https://image.freepik.com/free-vector/bearded-man-avatar-man-vector-portrait_9385-36.jpg"></img>
        </div>
        <div>
          ava+descr
        </div>
      </div>
    )
}

export default ProfileInfo