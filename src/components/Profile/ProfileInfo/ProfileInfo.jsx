import React from 'react'
import Preloader from '../../common/Preloader/Preloader'
import style from './ProfileInfo.module.css'

const ProfileInfo = (props) => {
  if(!props.profile){
    return <Preloader />
  }
    return (
      <div>
        <div className={style.avatar}>
          <img src={props.profile.photos.large} />
        </div>
        <div>
          ava+descr
        </div>
      </div>
    )
}

export default ProfileInfo