import React from 'react'
import Preloader from '../../common/Preloader/Preloader'
import style from './ProfileInfo.module.css'
import userPhoto from '../../../assets/images/png-transparent-avatar-user-computer-icons-software-developer-avatar-child-face-heroes.png'

const ProfileInfo = (props) => {
  if(!props.profile){
    return <Preloader />
  }
    return (
      <div>
        <div className={style.avatar}>
          <img src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto} />
        </div>
        <div className={style.aboutMe}>
          <p className={style.name}>{props.profile.fullName}</p>
          <p className={style.description}>{props.profile.aboutMe != null ? props.profile.aboutMe : 'Пусто'}</p>
        </div>
      </div>
    )
}

export default ProfileInfo